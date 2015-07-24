// require.js looks for the following global when initializing
// if an import fails with this error message in the TypeScript Compiler
// error TS2307: Cannot find external module
// then create a custom version of the TS Def. Look at the definitions/custom/toastr for a working example
// source for this fix https://github.com/ScottHamper/Cookies/pull/46
var require = {
    baseUrl: ".",
    paths: {
        "crossroads":           "Modules/EM.TimeTracking/Scripts/libs/crossroads/dist/crossroads.min",
        "hasher":               "Modules/EM.TimeTracking/Scripts/libs/hasher/dist/js/hasher.min",
        "jquery":               "Modules/EM.TimeTracking/Scripts/libs/jquery/dist/jquery",
        "jqueryui":             "Modules/EM.TimeTracking/Scripts/libs/jquery-ui/jquery-ui.min",
        "fancytree":            "Modules/EM.TimeTracking/Scripts/libs/fancytree/dist/jquery.fancytree-all.min",
        "knockout":             "Modules/EM.TimeTracking/Scripts/libs/knockout/dist/knockout",
        "knockout-projections": "Modules/EM.TimeTracking/Scripts/libs/knockout-projections/dist/knockout-projections",
        "knockout.mapping": "Modules/EM.TimeTracking/Scripts/libs/knockout-mapping/build/output/knockout.mapping-latest",
        "signals":              "Modules/EM.TimeTracking/Scripts/libs/js-signals/dist/signals.min",
        "text":                 "Modules/EM.TimeTracking/Scripts/libs/requirejs-text/text",
        "base64":               "Modules/EM.TimeTracking/Scripts/libs/requirejs-base64/base64",
        "moment":               "Modules/EM.TimeTracking/Scripts/libs/moment/min/moment-with-locales.min",
        "contextmenu":          "Modules/EM.TimeTracking/Scripts/libs/ui-contextmenu/jquery.ui-contextmenu.min",
        "d3":                   "Modules/EM.TimeTracking/Scripts/libs/d3/d3.min"
    },
    shim: {
        jquery: { exports: '$' },
        "jqueryui": { deps: ["jquery"], exports: 'jqueryui' },
        "fancytree": { deps: ["jquery", "jqueryui"], exports: 'fancytree' },
        "contextmenu": { deps: ["jquery", "jqueryui"], exports: 'contextmenu' },
        "knockout.mapping": { deps: ['knockout'], exports: 'knockout.mapping' }
    }
};
