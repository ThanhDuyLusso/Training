function testFunction() {
    document.getElementById("testScript").innerHTML = "This is from external script";
}


function chooseCard() {
    var select = document.getElementById("graphicCard").value;
    //NVIDIA
    var Nvidia = arrayNvidia = ["GTX 750", "GTX 1050", "GTX 1650"];

    //AMD
    var Amd = arrayAmd = ["RX 550", "RX 570", "RX 600"];
    if (select === "Nvidia") {
        //Option Nvidia
        for (var i = 0; i < arrayNvidia.length; i++) {
            var option = document.createElement("OPTION"),
                txt = document.createTextNode(arrayNvidia[i]);
            option.appendChild(txt);
            option.setAttribute("value", arrayNvidia[i]);
            gpuSeries.insertBefore(option, gpuSeries.lastChild);
        }
    } else {
        //Option AMD
        for (var i = 0; i < arrayAmd.length; i++) {
            var option = document.createElement("OPTION"),
                txt = document.createTextNode(arrayAmd[i]);
            option.appendChild(txt);
            option.setAttribute("value", arrayAmd[i]);
            gpuSeries.insertBefore(option, gpuSeries.lastChild);
        }
    }
}

// function filter() {
//     var keyword = document.getElementById("search").value;
//     var select = document.getElementById("select");
//     for (var i = 0; i < select.length; i++) {
//         var txt = select.options[i].text;
//         if (!txt.match(keyword)) {
//             $(select.options[i]).attr('disabled', 'disabled').hide();
//         } else {
//             $(select.options[i]).removeAttr('disabled').show();
//         }

//     }
// }
