let inp=document.querySelector(".inp");
let text=document.querySelector(".dis");
let form=document.querySelector(".form")
let x = parseInt(Math.random() * 101);
console.log(`To'g'ri Javob: ${x}`);


form.addEventListener('submit', (e) =>{
    e.preventDefault();
    let tSon = Number(inp.value);
    if(tSon > x){
        text.textContent = `${tSon}dan kichikroq son kiriting`;
        text.classList.remove('red');
        text.classList.remove('green');
        text.classList.add('blueviolet');
    } else if(tSon < x){
        text.textContent = `${tSon}dan kattaroq son kiriting`;
        text.classList.add('red');
        text.classList.remove('green');
        text.classList.remove('blueviolet');
    }else if (tSon === x){
        text.textContent = `${tSon} To'g'ri topdingiz`;
        text.classList.remove('red');
        text.classList.add('green');
        text.classList.remove('blueviolet');
    }
});