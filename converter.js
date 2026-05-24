function convertMeasurement() {

    let value =
    parseFloat(document.getElementById("value").value);

    let conversion =
    document.getElementById("conversion").value;

    let result = 0;

    if (conversion == "cmToM") {
        result = value / 100;

        document.getElementById("result").innerHTML =

        value + " cm = " +
        result.toFixed(2) + " m";
    }

    else if (conversion == "mToCm") {
        result = value * 100;

        document.getElementById("result").innerHTML =

        value + " m = " +
        result.toFixed(2) + " cm";
    }

}