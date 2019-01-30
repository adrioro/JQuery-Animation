$("#myDiv").hover(
    function () {
        $(this).animate({ width: "+=100" });
    },
    function () {
        $(this).animate({ width: "-=100" });
    }
);