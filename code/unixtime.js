inlets = 1;
outlets = 1;

function bang() {    
    outlet(0, Date.now()) // will send out the unix time in milliseconds when receiving a bang
}

function msg_int(v) {
    var d = new Date(v)
    outlet(0, "date", d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds()) // will send out the integer value when receiving a number
}