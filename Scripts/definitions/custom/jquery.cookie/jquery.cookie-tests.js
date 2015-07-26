/// <reference path="../../definitelytyped/jquery/jquery.d.ts" />
///<reference path="jquery.cookie.d.ts" />
var TestObject = (function () {
    function TestObject(text, value) {
        this.text = text;
        this.value = value;
    }
    return TestObject;
})();
var CookieOptions = (function () {
    function CookieOptions() {
    }
    return CookieOptions;
})();
$.cookie("the_cookie", "the_value");
console.log($.cookie("the_cookie"));
var testObject = new TestObject("Hello World", 5);
var cookieOptions = new CookieOptions();
cookieOptions.path = "/";
cookieOptions.domain = "jquery.com";
$.cookie.json = true;
$.cookie("test", testObject, cookieOptions);
var result = $.cookie("test");
console.log(result.text);
//# sourceMappingURL=jquery.cookie-tests.js.map