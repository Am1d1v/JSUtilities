


let insert = document.getElementById("insert");


window.addEventListener("keydown",(e)=>{
   // console.log(event);
   // console.log(event.key);
   // console.log(event.keyCode);
   //  console.log(event.code);

    insert.innerHTML = `
    <div class="key">
        ${e.key === " " ? "Space" : e.key}
         <small>event.key</small>
    </div>
    

    <div class="key">
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
    ${e.code}
        <small>event.code</small>
    </div>
    `
});

