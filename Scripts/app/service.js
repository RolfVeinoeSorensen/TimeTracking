var EM;
(function (EM) {
    var Service;
    (function (Service) {
        Service.main = {
            getRootMembers: Service.rootPath + "main/getrootmembers/",
            getChildren: Service.rootPath + "main/getchildren/"
        };
        Service.timeRegistration = {
            getRootMembersWithTimeRegistrations: Service.rootPath + "timeregistration/getrootmemberswithtimeregistrations/"
        };
        Service.rootPath = "api/timetracking/";
    })(Service = EM.Service || (EM.Service = {}));
})(EM || (EM = {}));
//# sourceMappingURL=service.js.map