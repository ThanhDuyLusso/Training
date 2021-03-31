function chooseCard() {
    var select = document.getElementById("graphicCard").value;
    //NVIDIA
    var Nvidia = arrayNvidia = ["GTX 750", "GTX 1050", "GTX 1650"];

    //AMD
    var Amd = arrayAmd = ["RX 550", "RX 570", "RX 600"];


    if (select === "Nvidia") {
        //Option Nvidia
        $("#gpuNvidia").css("display", "block");

    } else {
        //Option AMDs
        $("#gpuAmd").css("display", "block");
    }
}