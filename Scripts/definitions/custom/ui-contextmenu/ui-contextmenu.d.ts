// Type definitions for jquery-ui-contextmenu 1.10.0
// Project: https://github.com/mar10/fancytree
// Definitions by: Rolf Veinø Sørensen <https://github.com/RolfVeinoeSorensen>
// Definitions: https://github.com/mar10/jquery-ui-contextmenu


/// <reference path="../../definitelytyped/jquery/jquery.d.ts" />
/// <reference path="../../custom/jqueryui/jqueryui.d.ts" />

declare module JQueryUI {
    interface UI {
        contextmenu: Contextmenu.ContextmenuStatic;
    }
}

interface JQuery {
    contextmenu(options?: Contextmenu.ContextmenuOptions): Contextmenu.Contextmenu;
    //contextmenu(option?: delegate: string, menu: any[], ): any;
}

declare module Contextmenu {
    interface Contextmenu {
        $div: JQuery;

        
    }
    interface ContextmenuOptions extends ContextmenuEvents {
        addClass?: string; //default: "ui-contextmenu". This class is added to the outer ul element.
        autoFocus?: boolean; //default: false. Set keyboard focus to first menu entry on open.
        autoTrigger?: boolean; //default: true. Set `false` to prevent opening on a browser's `contextmenu` event, which is normally triggered by a mouse rightclick. The menu can still be opened by calling the `open()` method.
        delegate: any; //A selector to filter the elements that trigger the context menu.
        hide?: boolean | number | string | Object; //default: { effect: "fadeOut", duration: "fast" }. Effect applied when hiding the popup. See sample for possible option values. http://api.jqueryui.com/jQuery.widget/#option-show
        ignoreParentSelect?: boolean //default: true. If true, a click on a menu item that contains a sub-menu, will not trigger the select event.
        menu: any; //Object[] | string | JQuery //jQuery object or selector of HTML markup that defines the context menu structure (see jQueryUI menu for details). If an array of objects is passed, it will be used to generate such markup on the fly.
        position?: Object | Function; 
                // Type: Object | Function
                //default: {my: "left top", at: "center", of: event, collision: "fit"}
                //Define position where popup opens.A simple position may be passed.
                //    Also a function may be specified, to recalculate position every time:
                //    $("#container").contextmenu({
                //        position: function (event, ui) {
                //            return { my: "left top", at: "left bottom", of: ui.target };
                //        }, ...
        preventContextMenuForPopup?: boolean; // default: false. Prevent that a right click inside an open popup menu will open the browser's system context menu.
        preventSelect?: boolean; //default: false. Prevent accidental text selection of potential menu targets on doubleclick or drag.
        show?: boolean | number | string | Object; //default: { effect: "slideDown", duration: "fast"}. Effect applied when showing the popup. See sample for possible option values. http://api.jqueryui.com/jQuery.widget/#option-show
        taphold?: boolean; //default: false. Open menu on taphold events, which is especially useful for touch devices (but may require external plugins to generate taphold events). http://api.jquerymobile.com/taphold/
        tooltip?: string; //optional. Add a title attribute to the menu markup, which will be displayed as tooltip by most browser (or external plugins).
        uiMenuOptions?: Object; //default: {}. Custom options passed to UI Menu, when the widget is created. Especially useful to tweak the position of submenus.
    }
    interface ContextmenuStatic {

    }
  
    interface ContextmenuEvents {
        //// Methods
        //close(): void; //Close context menu if open. Call like $(...).contextmenu("close");
        //enableEntry(cmd, flag): any;
        //getMenu(): any;
        //isOpen(): boolean;
        //open(any): any;
        //replaceMenu(menu): void;
        //replaceMenu(menu): any;
        //setEntry(cmd, data): any;
        //showEntry(cmd, flag): any;

        //Events
        beforeOpen?: (event, ui) => any;
        blur?: (event, ui) => any;
        close?: (event) => any;
        create?: (event, ui) => any;
        createMenu?: (event, ui) => any;
        focus?: (event, ui)=> any;
        open?: (event)=> any;
        select?: (event, ui)=> any;

    }
}

declare var contextmenu: JQuery;

declare module "contextmenu" {
    export = contextmenu;
}