
    let googleBody = document.querySelector("body");
    let oldColor = "";   

    setInterval(function (){
        if(oldColor === "red"){
            googleBody.style.backgroundColor = "yellow";
            oldColor = "yellow";
        }else if(oldColor === "yellow"){
            googleBody.style.backgroundColor = "green";
            oldColor = "green";
        }else if(oldColor === "green"){
            googleBody.style.backgroundColor = "blue";
            oldColor = "blue";
        }else {
            googleBody.style.backgroundColor = "red"
            oldColor = "red";
        }
     }, 1000)