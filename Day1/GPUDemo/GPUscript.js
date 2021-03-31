function chooseCard() {
    var select = document.getElementById("graphicCard").value;
    // //NVIDIA
    // var Nvidia = arrayNvidia = ["GTX 750", "GTX 1050", "GTX 1650"];

    // //AMD
    // var Amd = arrayAmd = ["RX 550", "RX 570", "RX 600"];


    if (select === "Nvidia") {
        //Option Nvidia
        $("#gpuNvidia").css("display", "block");
        document.getElementById("graphicCard").disabled = true;
        // $("#manufacturerNvidia").css("display", "block");


    } else if (select === "Amd") {
        //Option AMDs
        $("#gpuAmd").css("display", "block");
        document.getElementById("graphicCard").disabled = true;
        // $("#manufacturerAmd").css("display", "block");
    }
}

function chooseGPUSeries() {
    document.getElementById("gpuSeriesNvidia");
    $("#manufacturerNvidia").css("display", "block");
}

function chooseModelNvidia() {
    var select = document.getElementById("selectManufacturerNvidia").value;
    if (select === "ASUS") {
        $("#videoCardNvidia").css("display", "block");
    } else {

    }

}

function reChoice() {
    document.getElementById("graphicCard").disabled = false;
    $("#gpuNvidia").css("display", "none");
    $("#gpuAmd").css("display", "none");
    $("#manufacturerNvidia").css("display", "none");
    $("#manufacturerAmd").css("display", "none");
}

function openImage() {
    var select = document.getElementById("gpuModel").value;
    $("img").attr("width", "250px")
    if (select === "n750ti1") {
        $("#gtx750ti1").css("display", "block")
        $("#gtx750ti2").css("display", "none")
        $("#gtx750ti3").css("display", "none")

    }
    else if (select === "n750ti2") {
        $("#gtx750ti1").css("display", "none")
        $("#gtx750ti2").css("display", "block")
        $("#gtx750ti3").css("display", "none")

    }
    else if (select === "n750ti3") {
        $("#gtx750ti1").css("display", "none")
        $("#gtx750ti2").css("display", "none")
        $("#gtx750ti3").css("display", "block")
    }
}