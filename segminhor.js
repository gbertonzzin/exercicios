console.log("teste");
var uString = " "
var seg = 0;
var min = 0;
var hor = 0;


function segminhor(n, u){
    if (u === "H") {
        n == 1 ? (uString = "hora") : (uString = "horas");
        hor = n;
        min = n * 60;
        seg = n * 60 * 60;
    }
    else if (u === "M"){
        n == 1 ? (uString = "minuto") : (uString = "minutos");
        hor = n / 60;
        min = n;
        seg = n * 60;
    }
    else if (u === "S"){
        n == 1 ? (uString = "segundo") : (uString = "segundos");
        hor = n / 60 / 60;
        min = n / 60;
        seg = n;
    }
    console.log(`${n} ${uString} ${n == 1 ? "resulta" : "resultam"} em ${hor} ${hor == 1 ? "hora" : "horas"}, ${min} ${min == 1 ? "minuto" : "minutos"} e ${seg} ${seg == 1 ? "segundo" : "segundos"}.`)
}

segminhor(5555, "M");
segminhor(550055, "S");
segminhor(55, "H");
segminhor(6752, "M");
segminhor(88311235, "S");
segminhor(993745, "M");
segminhor(55, "H");
segminhor(76232753242, "S");