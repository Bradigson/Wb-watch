function startTime(){
    var today = new Date(), hours = today.getHours(), minutes = today.getMinutes(),
    date = today.getDate(), day = today.getDay(), month = today.getMonth();

    hours = (hours == 0 ) ? 12 : hours;
    hours = (hours > 12) ? hours - 12 : hours;

    hours = checkTime(hours);
    minutes = checkTime(minutes);

    var dia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"],
    mes = ["Enero", "Febrero", "Marzo", "Abrir", "Mayo", "Junio", "Julio", "Agosto", "Octubre", "Noviembre", "Diciembre"];


    var hr = document.getElementById('time').innerHTML = hours + ":" + minutes,
    dt = document.getElementById('date').innerHTML = dia[day]+" "+ date+" " +"de" +" "+" "+ mes[month];


    var time = setTimeout(
        function(){
            startTime();
        },500);
}

function checkTime(e){
    if(e <  10){
        e = "0" + e;
    }
    return e;

}