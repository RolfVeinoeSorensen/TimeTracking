/// <reference path="../../references.d.ts" />
/// <amd-dependency path="text!./home.html" />
import ko = require("knockout");
import datepicker = require("datepicker")
import moment = require("moment")

var datepickerDummy = datepicker; //force datepicker to be in the define array for requirejs in the js output
var momentDummy = moment; //force moment to be in the define array for requirejs in the js output

export var template: string = require("text!./home.html");

export class viewModel {
    // initialize
    constructor() {
        this.initDatePicker();
    }

    public message = ko.observable("Welcome Timetracking!");
    public startdate = ko.observable(moment());
    public initDatePicker () {
        $('.timetracking-datepicker').datepicker({
            todayBtn: "linked",
            calendarWeeks: true,
            todayHighlight: true,
            startView: 0                    
        });
    }
    public doSomething() {
        this.message('You invoked doSomething() on the viewmodel.');
    }
}