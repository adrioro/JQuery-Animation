//HOVER: .hover( handlerIn, handlerOut )
//ANIMATION: $(SELECTOR).animate(PROPERTIES, OPTIONS);//
//PROPERTIES:
$("#myDiv").hover(
    function () {
        $(this).animate({ width: "+=100" });
    },
    function () {
        $(this).animate({ width: "-=100" });
    }
);
//OPTIONS:
$("#Div1").hover(
    function () { //First function for handlerIn.
        $(this).animate({
                width: 200, //This is all the CSS.
                height: 200,
                borderWidth: "10px",
            },
            1500, //This is the duration
            function () { //This is the callback function.
                alert("Finished animated-callback.");
            }
        );
    },
    function () { //Second function for handlerOut.
        $(this).animate({
                width: 100, //This is all the CSS.
                height: 100,
                borderWidth: "1px",
            },
            1500, //This is the second duration
            function () { //This is the callback function.
                alert("Return back-callback");
            }
        );

    }
);