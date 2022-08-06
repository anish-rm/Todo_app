const addf = document.querySelector('.add');
const list = document.querySelector('.todos');

function generate(s){
    const html = `
    <li class="item">
        <span>${s}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;

}

addf.addEventListener('submit' , e=>{
    e.preventDefault();

    const s = addf.addbox.value.trim();
    if(s.length){
        generate(s);
        addf.reset();
    }
    
});

list.addEventListener('click' ,e=>{
    if(e.target.classList.contains('delete')){
        console.log(e.target);
        e.target.parentElement.remove();
    }
});