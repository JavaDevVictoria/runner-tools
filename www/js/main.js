function getFloatValueOrZero(elementId)
{
    var ret = parseFloat(document.getElementById(elementId).value);
    if (isNaN(ret)) {
        ret = 0.0;
    }
    
    return ret;
}


function calculateValues()
{
    var input_m = getFloatValueOrZero('input_m'); 
    var input_s = getFloatValueOrZero('input_s'); 
    var km = getFloatValueOrZero('km'); 
    
    var input_ms = input_m + (input_s / 60);
    if (input_ms === 0) {
        document.getElementById("kmh").innerHTML = '-';
        return;
    }
    
    // km/h
    var kmh = Math.round(60 * km / input_ms * 100) / 100;
    document.getElementById("kmh").innerHTML = kmh;
    
    // m/s
    var ms = Math.round(kmh / 3.6 * 100) / 100;
    document.getElementById("ms").innerHTML = ms;
}


// NOT WORKING !
// Wait for device API libraries to load
//
//function onLoad() {
//    document.addEventListener("deviceready", onDeviceReady, false);
//}
//
//// device APIs are available
////
//function onDeviceReady() {
//    document.getElementById("calculate").addEventListener("click", calculateValues, false);
//}

