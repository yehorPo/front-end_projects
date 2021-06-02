$(function() {
    var res = 0;
	var price1 = $("#price1").html();
	price1 = parseInt(price1);
	var price2 = $("#price2").html();
	price2= parseInt(price2);
	var price3 = $("#price3").html();
	price3 = parseInt(price3);
    $("#1").on("click", add1);
    $("#2").on("click", add2);
    $("#3").on("click", add3);
    $("#4").on("click", sum);
	
    function add1() {
        res += price1;
        $("#label1").addClass("badge-selected");
		$("#1").addClass("badge-selected");
		$("#1").prop('disabled', true);
		$("#1").text("Selected");
    }

    function add2() {
        res += price2;
        $("#label2").addClass("badge-selected");
		$("#2").addClass("badge-selected");
		$("#2").prop('disabled', true);
		$("#2").text("Selected");
    }

    function add3() {
        res += price3;
        $("#label3").addClass("badge-selected");
		$("#3").addClass("badge-selected");
		$("#3").prop('disabled', true);
		$("#3").text("Selected");
    }

    function sum() {
        $("#5").text(res);
		$("#5").addClass("badge-selected");
    }


})