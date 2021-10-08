$(function() {
    let txt1 = "$13kZZUT!";
    let txt2 = "$ith&TT?";
    let num1 = 20;
    let num2 = 32;
    $("#button01").on("click", function() {
    $("#content"). text("Ehlc518!");
    })
    $("#button02").on("click", function() {
    $("#content").text(txt1);
    })
    $("#button03").on("click", function() {
    $("#content").text(txt1 + txt2);
    })
    $("#button04").on("click", function() {
    $("#content").text(num1 + num2);
    })
    $("#button05").on("click", function() {
    $("#content").text(num1+ "ET" + num2 + "&" + (numi + num2) + "TT");
    })
    });