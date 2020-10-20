const div= document.querySelector('#div1');
let div2=document.querySelector('#div2');
const btn = document.querySelector('#btn');

const changeText= ()=>{
    div.innerText='ny text!!'
}

//är att föredra
btn.addEventListener('click', ()=>{
    div2.style.backgroundColor='#333';
    div2.innerHTML=
    `
    <ul>
    <li>item</li>
    <li>item</li>
    <li>item</li>
    </ul>
    `
} )


