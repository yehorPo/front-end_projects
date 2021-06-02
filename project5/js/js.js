$(function() {
    $("#m").on("click", initM);
    // $("#k").on("click", initK);

    // function initK() {
    //     $("#label1").keydown(setStyle1);

    //     function setStyle1() {
    //         $("#label1").addClass("chosen");
    //     }
    //     $("#label2").keydown(setStyle2);

    //     function setStyle2() {
    //         $("#label2").addClass("chosen");
    //     }
    //     $("#label2").keydown(setStyle2);

    //     function setStyle2() {
    //         $("#label2").addClass("chosen");
    //     }
    //     $("#label3").keydown(setStyle3);

    //     function setStyle3() {
    //         $("#label3").addClass("chosen");
    //     }
    //     $("#label4").keydown(setStyle4);

    //     function setStyle4() {
    //         $("#label4").addClass("chosen");
    //     }
    //     $("#label5").keydown(setStyle5);

    //     function setStyle5() {
    //         $("#label5").addClass("chosen");
    //     }
    //     $("#label6").keydown(setStyle6);

    //     function setStyle6() {
    //         $("#label6").addClass("chosen");
    //     }


    // }

    function initM() {
        $("#label1").on("click", setStyle1);

        function setStyle1() {
            $("#label1").addClass("chosen");
        }
        $("#label2").on("click", setStyle2);

        function setStyle2() {
            $("#label2").addClass("chosen");
        }
        $("#label3").on("click", setStyle3);

        function setStyle3() {
            $("#label3").addClass("chosen");
        }
        $("#label4").on("click", setStyle4);

        function setStyle4() {
            $("#label4").addClass("chosen");
        }
        $("#label5").on("click", setStyle5);

        function setStyle5() {
            $("#label5").addClass("chosen");
        }
        $("#label6").on("click", setStyle6);

        function setStyle6() {
            $("#label6").addClass("chosen");
        }
    }



})