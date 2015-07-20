// require.js looks for the following global when initializing
// if an import fails with this error message in the TypeScript Compiler
// error TS2307: Cannot find external module
// then create a custom version of the TS Def. Look at the definitions/custom/toastr for a working example
// source for this fix https://github.com/ScottHamper/Cookies/pull/46
var require = {
    baseUrl: ".",
    paths: {
        "bootstrap":            "Modules/TimeTracking/Scripts/libs/components-bootstrap/js/bootstrap.min",
        "crossroads":           "Modules/TimeTracking/Scripts/libs/crossroads/dist/crossroads.min",
        "hasher":               "Modules/TimeTracking/Scripts/libs/hasher/dist/js/hasher.min",
        "jquery":               "Modules/TimeTracking/Scripts/libs/jquery/dist/jquery",
        "jqueryui":             "Modules/TimeTracking/Scripts/libs/jquery-ui/jquery-ui.min",
        "fancytree":            "Modules/TimeTracking/Scripts/libs/fancytree/dist/jquery.fancytree-all.min",
        "knockout":             "Modules/TimeTracking/Scripts/libs/knockout/dist/knockout",
        "knockout-projections": "Modules/TimeTracking/Scripts/libs/knockout-projections/dist/knockout-projections",
        "signals":              "Modules/TimeTracking/Scripts/libs/js-signals/dist/signals.min",
        "text":                 "Modules/TimeTracking/Scripts/libs/requirejs-text/text",
        "toastr":               "Modules/TimeTracking/Scripts/libs/toastr/toastr",
        "base64":               "Modules/TimeTracking/Scripts/libs/requirejs-base64/base64",
        "moment":               "Modules/TimeTracking/Scripts/libs/moment/min/moment-with-locales.min",
        "datepicker":           "Modules/TimeTracking/Scripts/libs/bootstrap-datepicker/dist/js/bootstrap-datepicker.min"
    },
    shim: {
        jquery: { exports: '$' },
        "jqueryui": { deps: ["jquery"], exports: 'jqueryui' },
        "fancytree": { deps: ["jquery", "jqueryui"], exports: 'fancytree' },
        "bootstrap": { deps: ["jquery"], exports: '$' },
        "toastr": { deps: ["jquery"] },
        "datepicker": { deps: ["jquery"], exports: 'datepicker' }
    }
};
