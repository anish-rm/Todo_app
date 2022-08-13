const addf = document.querySelector('.add');
const list = document.querySelector('.todos');
const value = document.querySelector('.search');

const search = ((to) =>{
    const s1 = Array.from(list.children).filter((u)=>{
        return !(u.textContent.toLowerCase().includes(to));
    });
    s1.forEach((u)=>{
        u.classList.add('filtered');
    })
    Array.from(list.children).filter((u)=>{
        return (u.textContent.toLowerCase().includes(to));
    }).forEach((u)=>{
        u.classList.remove('filtered');
    })
    console.log(s1);
});


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

value.addEventListener('keyup',e=>{
    const to = value.search.value.trim().toLowerCase();
    search(to);
});