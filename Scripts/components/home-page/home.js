define(["require", "exports", "knockout", "moment", "jquery", "jqueryui", "fancytree", "datepicker", "text!./home.html"], function (require, exports, ko, moment, $, jqueryui, fancytree, datepicker) {
    var momentDummy = moment; //force moment to be in the define array for requirejs in the js output
    var jqueryuiDummy = jqueryui;
    var fancytreeDummy = fancytree;
    var datepickerDummy = datepicker; //force datepicker to be in the define array for requirejs in the js output
    exports.template = require("text!./home.html");
    var viewModel = (function () {
        // initialize
        function viewModel() {
            this.message = ko.observable("Welcome Timetracking!");
            this.startdate = ko.observable(moment());
            this.initDatePicker();
            this.initTreeGrid();
        }
        viewModel.prototype.initDatePicker = function () {
            $.noConflict(); //Not to conflict with other scripts
            $(function () {
                $('.timetracking-datepicker').datepicker({
                    todayBtn: "linked",
                    calendarWeeks: true,
                    todayHighlight: true,
                    startView: 0
                });
            });
        };
        viewModel.prototype.initTreeGrid = function () {
            $(function () {
                // Attach the fancytree widget to an existing <div id="tree"> element
                // and pass the tree options as an argument to the fancytree() function:
                $("#treetable").fancytree({
                    extensions: ["table"],
                    checkbox: true,
                    table: {
                        indentation: 20,
                        nodeColumnIdx: 2,
                        checkboxColumnIdx: 0 // render the checkboxes into the 1st column
                    },
                    source: [
                        {
                            "title": "Customer 1", "key": "c1", "expanded": true, "folder": true, "children": [
                                {
                                    "title": "Main Task 1", "key": "mt1", "timetrackings": ["7", "3.5", "6"], "expanded": true, "folder": true, "children": [
                                        { "title": "Sub Task 1", "key": "st1" },
                                        { "title": "Sub Task 2", "key": "st2" },
                                        { "title": "Sub Task 3", "key": "st3" },
                                        { "title": "Sub Task 4", "key": "st4" }
                                    ]
                                },
                                {
                                    "title": "Main Task 2", "key": "mt2", "timetrackings": ["9", "11.5", "2"], "folder": true, "children": [
                                        { "title": "Sub Task 5", "key": "st5" },
                                        { "title": "Sub Task 6", "key": "st6" },
                                        { "title": "Sub Task 7", "key": "st7" },
                                        { "title": "Sub Task 8", "key": "st8" },
                                        { "title": "Sub Task 9", "key": "st9" },
                                        { "title": "Sub Task 10", "key": "st10" }
                                    ]
                                }
                            ]
                        }
                    ],
                    lazyLoad: function (event, data) {
                        //data.result = { url: "ajax-sub2.json" }
                    },
                    renderColumns: function (event, data) {
                        var node = data.node, $tdList = $(node.tr).find(">td");
                        var nodeArrayNumber = node.getIndexHier();
                        var timetrackings = null;
                        if (node.data != null && typeof node.data !== undefined) {
                            timetrackings = node.data.timetrackings;
                        }
                        // (index #0 is rendered by fancytree by adding the checkbox)
                        $tdList.eq(1).text(node.getIndexHier()).addClass("alignRight");
                        // (index #2 is rendered by fancytree)
                        $tdList.eq(3).text(node.key);
                        $tdList.eq(4).html("<input type='checkbox' name='like' value='" + node.key + "'>");
                        if (timetrackings != null && typeof timetrackings !== undefined) {
                            if (timetrackings[0] != null && typeof timetrackings[0] !== undefined) {
                                $tdList.eq(5).html("<input type='input' value='" + timetrackings[0] + "'>");
                            }
                            else {
                                $tdList.eq(5).html("<input type='input' value='" + "" + "'>");
                            }
                            if (timetrackings[1] != null && typeof timetrackings[1] !== undefined) {
                                $tdList.eq(6).html("<input type='input' value='" + timetrackings[1] + "'>");
                            }
                            else {
                                $tdList.eq(6).html("<input type='input' value='" + "" + "'>");
                            }
                            if (timetrackings[2] != null && typeof timetrackings[2] !== undefined) {
                                $tdList.eq(7).html("<input type='input' value='" + timetrackings[2] + "'>");
                            }
                            else {
                                $tdList.eq(7).html("<input type='input' value='" + "" + "'>");
                            }
                        }
                    }
                });
                /* Handle custom checkbox clicks */
                $("#treetable").delegate("input[name=like]", "click", function (e) {
                    var node = $.ui.fancytree.getNode(e), $input = $(e.target);
                    e.stopPropagation(); // prevent fancytree activate for this row
                    if ($input.is(":checked")) {
                        alert("like " + $input.val());
                    }
                    else {
                        alert("dislike " + $input.val());
                    }
                });
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