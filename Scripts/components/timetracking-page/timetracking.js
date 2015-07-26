/// <reference path="../../references.d.ts" />
define(["require", "exports", "knockout", "moment", "jquery", "jqueryui", "jquerycookie", "contextmenu", "fancytree", "text!./timetracking.html"], function (require, exports, ko, moment, $, jqueryui, jquerycookie, contextmenu, fancytree) {
    var momentDummy = moment; //force moment to be in the define array for requirejs in the js output
    var jqueryuiDummy = jqueryui;
    var jquerycookieDummy = jquerycookie;
    var fancytreeDummy = fancytree;
    var contextmenuDummy = contextmenu;
    exports.template = require("text!./timetracking.html");
    var viewModel = (function () {
        // initialize
        function viewModel() {
            this.debugMode = false;
            this.selectedDate = ko.observable(new Date().toISOString().substring(0, 10));
            this.timetrackingVm = [];
            //this.initData();
            this.initDatePicker();
            this.initJqueryUiElements();
            this.initPersonSelector();
            this.initTreeGrid();
        }
        viewModel.prototype.initJqueryUiElements = function () {
            $(function () {
                $("button[data-em]").each(function () {
                    var element = $(this);
                    element.button();
                });
            });
        };
        viewModel.prototype.initPersonSelector = function () {
            $(function () {
                $("#personselector").selectmenu({ width: '100%' });
            });
        };
        viewModel.prototype.initDatePicker = function () {
            var self = this;
            self.selectedDate = ko.observable(new Date().toISOString().substring(0, 10));
            $(function () {
                $('.timetracking-datepicker').datepicker({
                    dateFormat: "yy-mm-dd",
                    showWeek: true,
                    firstDay: 1,
                    onSelect: function (date) {
                        var oldDate = self.selectedDate();
                        var oldWeek = $.datepicker.iso8601Week(new Date(oldDate));
                        var newWeek = $.datepicker.iso8601Week(new Date(date));
                        if (oldWeek != newWeek) {
                            if (self.debugMode) {
                                console.log("New Week");
                            }
                            self.selectedDate(date);
                            var tree = $("#treetable").fancytree("getTree");
                            if (self.debugMode) {
                                console.log(tree.count());
                            }
                            if (self.debugMode) {
                                console.log($("#treetable").data);
                            }
                            var apiUrl = "api/timetracking/timeregistration/getrootmemberswithtimeregistrations/?selectedDate=" + self.selectedDate();
                            var data = $.ajax({
                                type: "GET",
                                url: apiUrl,
                                contentType: "application/json",
                                data: JSON.stringify(self.timetrackingVm),
                                datatype: 'json',
                                beforeSend: function (request) {
                                    //request.setRequestHeader('Authorization', session);
                                },
                                complete: function () {
                                },
                                success: function (data) {
                                    self.timetrackingVm = [];
                                    for (var i = 0; i < data.length; i++) {
                                        var item = data[i];
                                        self.timetrackingVm.push(item);
                                    }
                                    ;
                                    tree.reload(self.timetrackingVm).done(function (tree) {
                                        if (self.debugMode) {
                                            console.log("Reload tree DONE");
                                        }
                                    });
                                },
                                error: function (xhr, desc, err) {
                                    //toastr.error('Details: ' + desc + ' ' + err);
                                    console.log(xhr);
                                    console.log("Details: " + desc + "\nError:" + err);
                                }
                            });
                        }
                    }
                });
            });
        };
        viewModel.prototype.initTreeGrid = function () {
            var self = this;
            $(function () {
                self.selectedDate = ko.observable(new Date().toISOString().substring(0, 10));
                var sourceApiUrl = "api/timetracking/timeregistration/getrootmemberswithtimeregistrations/?selectedDate=" + self.selectedDate();
                // Attach the fancytree widget to an existing <div id="tree"> element
                // and pass the tree options as an argument to the fancytree() function:
                $("#treetable").fancytree({
                    extensions: ["table", "persist"],
                    table: {
                        indentation: 20,
                        nodeColumnIdx: 1 // render the node title into the 2nd column
                    },
                    selectMode: 3,
                    source: { url: sourceApiUrl },
                    persist: {
                        expandLazy: true,
                        // overrideSource: false, // true: cookie takes precedence over `source` data attributes.
                        store: "auto" // 'cookie', 'local': use localStore, 'session': sessionStore
                    },
                    cache: false,
                    lazyLoad: function (event, data) {
                        var node = data.node;
                        var apiUrl = "api/timetracking/timeregistration/getchildmemberswithtimeregistrations/" + node.key + "?selectedDate=" + self.selectedDate();
                        data.result = { url: apiUrl }; //, debugDelay: 3000
                    },
                    renderColumns: function (event, data) {
                        if (self.debugMode) {
                            console.log("renderColumns");
                        }
                        var node = data.node, $tdList = $(node.tr).find(">td");
                        if (self.debugMode) {
                            console.log(data);
                        }
                        if (self.debugMode) {
                            console.log(node);
                        }
                        var nodeArrayNumber = node.getIndexHier();
                        var timeRegistrations = null;
                        var mainType = null;
                        if (node.data != null && typeof node.data !== undefined) {
                            timeRegistrations = node.data.timeRegistrations;
                            mainType = node.data.mainType;
                        }
                        if (self.debugMode) {
                            console.log("is node expanded?" + node.expanded);
                        }
                        if (node.expanded) {
                            node.setExpanded();
                            console.log("the node with key " + node.key + " should have been expanded");
                            console.log(node);
                        }
                        if (timeRegistrations != null && typeof timeRegistrations !== undefined) {
                            var tdNumber = 2;
                            for (var i = 0; i < timeRegistrations.length; i++) {
                                tdNumber++;
                                if (timeRegistrations[i] != null && typeof timeRegistrations[i] !== undefined) {
                                    if (self.debugMode) {
                                        console.log("i " + i);
                                        console.log("tdNumber" + tdNumber);
                                        console.log("timetrackings[i].date " + timeRegistrations[i].date);
                                    }
                                    //if (typeof node.children != undefined && node.children != null && node.children.length != 0) {
                                    //if (self.debugMode) { console.log("node.children.length " + node.children.length); }
                                    $tdList.eq(tdNumber).html("<input type='input' class='ttTimeInput' value='" + timeRegistrations[i].value + "'>");
                                }
                            }
                        }
                    }
                })
                    .on("nodeCommand", function (event, data) {
                    // Custom event handler that is triggered by keydown-handler and
                    // context menu:
                    var refNode, moveMode, tree = $(this).fancytree("getTree"), node = tree.getActiveNode();
                    switch (data.cmd) {
                        case "moveUp":
                            refNode = node.getPrevSibling();
                            if (refNode) {
                                node.moveTo(refNode, "before");
                                node.setActive();
                            }
                            break;
                        case "moveDown":
                            refNode = node.getNextSibling();
                            if (refNode) {
                                node.moveTo(refNode, "after");
                                node.setActive();
                            }
                            break;
                        case "indent":
                            refNode = node.getPrevSibling();
                            if (refNode) {
                                node.moveTo(refNode, "child");
                                refNode.setExpanded();
                                node.setActive();
                            }
                            break;
                        case "outdent":
                            if (!node.isTopLevel()) {
                                node.moveTo(node.getParent(), "after");
                                node.setActive();
                            }
                            break;
                        case "rename":
                            node.editStart();
                            break;
                        case "remove":
                            refNode = node.getNextSibling() || node.getPrevSibling() || node.getParent();
                            node.remove();
                            if (refNode) {
                                refNode.setActive();
                            }
                            break;
                        case "addChild":
                            node.editCreateNode("child", "");
                            break;
                        case "addSibling":
                            node.editCreateNode("after", "");
                            break;
                        default:
                            alert("Unhandled command: " + data.cmd);
                            return;
                    }
                });
                /*
       * Context menu (https://github.com/mar10/jquery-ui-contextmenu)
       */
                $("#treetable").contextmenu({
                    delegate: "span.fancytree-node",
                    menu: [
                        { title: "edit", cmd: "rename", uiIcon: "ui-icon-pencil" },
                        { title: "delete", cmd: "remove", uiIcon: "ui-icon-trash" },
                        { title: "----" },
                        { title: "new sibling", cmd: "addsibling", uiIcon: "ui-icon-plus" },
                        { title: "new child", cmd: "addchild", uiIcon: "ui-icon-arrowreturn-1-e" }
                    ],
                    beforeopen: function (event, ui) {
                        var node = $.ui.fancytree.getNode(ui.target);
                        node.setActive();
                    },
                    select: function (event, ui) {
                        var that = this;
                        // delay the event, so the menu can close and the click event does
                        // not interfere with the edit control
                        setTimeout(function () {
                            $(that).trigger("nodecommand", { cmd: ui.cmd });
                        }, 100);
                    }
                });
                ///* Handle custom checkbox clicks */
                //$("#treetable").delegate("input[name=like]", "click", function (e) {
                //    var node = $.ui.fancytree.getNode(e),
                //        $input = $(e.target);
                //    e.stopPropagation();  // prevent fancytree activate for this row
                //    if ($input.is(":checked")) {
                //        alert("like " + $input.val());
                //    } else {
                //        alert("dislike " + $input.val());
                //    }
                //});
            });
        };
        return viewModel;
    })();
    exports.viewModel = viewModel;
});
//# sourceMappingURL=timetracking.js.map