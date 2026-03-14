let count = 1

let interval = setInterval(()=>{
    if(count <= 100){
        console.log(count);
        count++
    }
    else clearInterval(interval)
  
},100)