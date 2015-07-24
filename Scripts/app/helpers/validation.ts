$(document).on("keypress", ".numeric", function (e) {
    if(($(this).attr("class")).indexOf("price") >= 0) {

        var price = String.fromCharCode(e.which);

        //if the letter is not digit then display error and don't type anything
        if(/^[0-9]+\.?[0-9]*$/.test($(this).val() + price) == false) {
            $(this).css("background-color", "rgb(245, 203, 203)");
            $(this).css("border", "1px solid #FF0000");    
            $(this).attr("placeholder", "Enter only numbers");
            return false;
        }
        else {
            $(this).css("background-color", "#fff");
            $(this).removeAttr( "placeholder");
        }
    }
});