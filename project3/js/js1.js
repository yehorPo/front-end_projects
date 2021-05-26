$(function() {
    let a;
    let b;
    let res;
    $("#prompt").on("click", input);
    $("#plus").on("click", plus);
    $("#minus").on("click", minus);
    $("#mult").on("click", mult);
    $("#mod").on("click", mod);
    $("#sqrt").on("click", sqrt);
    $("#up").on("click", up);

    function input() {
        alert("1");
        while (a == null) {
            prompt("Enter first number", a);
        }
        a = parseInt(a);
        while (b == null) {
            prompt("Enter second number", b);
            b = parseInt(b);
        }
    }

    function plus() {
        res = a + b;
        alert(res);

    }

    function minus() {
        res = a - b;
        alert(res);

    }

    function mult() {
        res = a * b;
        alert(res);

    }

    function mod() {
        res = a % b;
        alert(res);

    }

    function sqrt() {
        prompt("Enter number", a);
        a = parseInt(a);
        a = Math.sqrt(a);
        alert(a);

    }

    function up() {
        res = a ^ b;
        alert(res);

    }

})