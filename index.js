const i=document.querySelector('.i')
const b =document.querySelector('.b')

const fecthApi=async(cep)=>{
    
    const dado =await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const response =await dado.json()
    console.log(response);
}


b.addEventListener('click',(e)=>{
    e.preventDefault()
    fecthApi(i.value)})
