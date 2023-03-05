const i=document.querySelector('.i')
const b =document.querySelector('.b')
const d =document.querySelector('.d')

const fecthApi=async(cep)=>{
    
    const dado =await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const response =await dado.json()
    console.log(response);

    const streetTxt=document.createElement('p')
     streetTxt.innerText='rua'
    d.appendChild(streetTxt)
    
    const street=document.createElement('p')
    street.innerText=response.logradouro
    d.appendChild(street)



}




b.addEventListener('click',(e)=>{
    e.preventDefault()
    fecthApi(i.value)})
