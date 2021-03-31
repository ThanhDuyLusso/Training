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
    if (select === "Asus") {
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