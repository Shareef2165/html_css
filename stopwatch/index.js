var isstop =true;
ms=0;
s=0;
min=0;
hr=0;

function start(){
    if( isstop==true){

        isstop=false;
        timer();

    }
}


function timer(){
    if(isstop==false){

        ms=parseInt(ms);
        s=parseInt(s);
        min=parseInt(min);
        hr=parseInt(hr);
        
        ms++;

        if(ms==60){
            ms=0;

            s++;
        }
        if(s==60){
            s=0
            min++;
        }
        if(min==60){

            min=0;
            hr++;
        }
        if(ms<10){
            ms= "0"+ms;
        }
        if(s<10){
            s= "0"+s;
        }
        if(min<10){
            min= "0"+min;
        }
        if(hr<10){
            hr= "0"+hr;
        }
        display.innerHTML = hr+ ":" +min + ":" +s+ ":" +ms;
        setTimeout("timer()",10);
    }
}

function stop(){
    isstop=true;
}

function reset(){

    isstop=true;

    ms=0;
    s=0;
    min=0;
    hr=0;

    display.innerHTML ="00 : 00 : 00 : 00 ";

}
