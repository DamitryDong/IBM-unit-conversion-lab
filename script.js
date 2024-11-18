
function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("cels").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahre").value = f //show the f value after conversion.
}

function weight(){
    //Weight(Pounds) = Weight(Kgs) * 2.2

    var k = document.getElementById("kilog").value;
    var p = k * 2.2
    document.getElementById("pounds").value = p
}

function distance(){
    //Distance(Miles) = Distance(Kms) * 0.62137

    var km = document.getElementById("kilom").value;
    var mi = km * 0.62137
    document.getElementById("miles").value = mi
}