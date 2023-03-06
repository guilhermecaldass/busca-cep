const i=document.querySelector('.i')
const b =document.querySelector('.b')
const d =document.querySelector('.d')


const getcep=(response)=>{


    const cep=document.createElement('section')

    const ceep=document.createElement('p')
    ceep.innerText=`Cep: ${response.cep}`
    cep.appendChild(ceep)


    const city=document.createElement('p')
    city.innerText=`Cidade: ${response.localidade} ,${response.uf}`
    cep.appendChild(city)


    const bairro=document.createElement('p')
    bairro.innerText=`Bairro: ${response.bairro}`
    cep.appendChild(bairro)

    
    const street=document.createElement('p')
    street.innerText=`Rua: ${response.logradouro}`
    cep.appendChild(street)

    const ddd=document.createElement('p')
    ddd.innerText=`DDD: ${response.ddd}`
    cep.appendChild(ddd)


    d.appendChild(cep)


}


const fecthApi=async(cep)=>{
    
    const dado =await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const response =await dado.json()
    console.log(response);

    getcep(response)

}




b.addEventListener('click',(e)=>{
    e.preventDefault()
    fecthApi(i.value)})
