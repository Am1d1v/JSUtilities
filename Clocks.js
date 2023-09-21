


function updateTime(){
    let date = new Date();
    let hours = date.getHours();
    let minuties = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10) {
        hours = '0' + hours;
    }

    if(minuties < 10) {
        minuties = '0' + minuties;
    }

    if(seconds < 10) {
        seconds = '0' + seconds;
    }
}