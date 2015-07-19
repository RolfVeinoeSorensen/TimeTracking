define(["require", "exports", "knockout", "datepicker", "moment", "text!./home.html"], function (require, exports, ko, datepicker, moment) {
    var datepickerDummy = datepicker; //force datepicker to be in the define array for requirejs in the js output
    var momentDummy = moment; //force moment to be in the define array for requirejs in the js output
    exports.template = require("text!./home.html");
    var viewModel = (function () {
        // initialize
        function viewModel() {
            this.message = ko.observable("Welcome Timetracking!");
            this.startdate = ko.observable(moment());
            this.initDatePicker();
        }
        viewModel.prototype.initDatePicker = function () {
            $('.timetracking-datepicker').datepicker({
                todayBtn: "linked",
                calendarWeeks: true,
                todayHighlight: true,
                startView: 0
            });
        };
        viewModel.prototype.doSomething = function () {
            this.message('You invoked doSomething() on the viewmodel.');
        };
        return viewModel;
    })();
    exports.viewModel = viewModel;
});
//# sourceMappingURL=home.js.map