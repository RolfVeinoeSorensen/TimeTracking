define(["require", "exports", "knockout", "./router"], function (require, exports, ko, router) {
    var moduleComponentPath = 'Modules/EM.TimeTracking/Scripts/components/';
    var moduleComponentTextPath = 'text!Modules/EM.TimeTracking/Scripts/components/';
    // Components can be packaged as AMD modules, such as the following:
    ko.components.register('nav-bar', { require: moduleComponentPath + 'nav-bar/nav-bar' });
    ko.components.register('home-page', { require: moduleComponentPath + 'home-page/home' });
    ko.components.register('timetracking-page', { require: moduleComponentPath + 'timetracking-page/timetracking' });
    // ... or for template-only components, you can just point to a .html file directly:
    ko.components.register('about-page', {
        template: {
            require: moduleComponentTextPath + 'about-page/about.html' }
    });
    // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]
    // Start the application
    ko.applyBindings({ route: router.currentRoute });
});
//# sourceMappingURL=startup.js.map