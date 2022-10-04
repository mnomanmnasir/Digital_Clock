
const digital= () =>
{

    let date = new Date();

    let h = date.getHours();

    
    let m = date.getMinutes();

    
    let s = date.getSeconds();

let time = h + ":" + m +":" + s;


document.getElementById('Digital_clock').textContent = time;
    
    

}

setInterval(() => {
digital()
}, 1000);