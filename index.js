const tempLoad = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb";
    temp.style.color = "#fff";

    setTimeout(() =>{
       temp.innerHTML = "&#xf2ca";
       temp.style.color = "#f8b627";
    },1000);

    setTimeout(() =>{
        temp.innerHTML = "&#xf2c9";
     },2000);

     setTimeout(() =>{
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "green";
     },3000);

     setTimeout(() =>{
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "#d63031";
     },4000);
}
tempLoad();

setInterval(tempLoad,5000);