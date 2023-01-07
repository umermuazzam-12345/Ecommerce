console.log("script")
//  name=document.getElementById('name').innerText;
// email=document.getElementById('email').value;
// phone=document.getElementById('phone').value;

a=Array.from(document.getElementsByTagName('a'))

a.forEach((element) => {
    element.addEventListener('click',(e)=>{ 
        removeClass()      
        e.target.classList.add('active')
    })
});

const removeClass=()=>{
    a.forEach((element)=>{
        element.classList.remove('active')
    })
}

const submit=document.getElementById('mybtn')

console.log(submit)
submit.addEventListener('click',()=>{
    console.log("submit")
     
})





