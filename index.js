const i=document.querySelector('.i')
const b =document.querySelector('.b')
const d =document.querySelector('.d')



const getcep=(response)=>{

   

    const ceep=document.createElement('p')
    ceep.className='cepInf'
    ceep.innerText=`Cep: ${response.cep}`
    d.appendChild(ceep)


    const city=document.createElement('p')
    city.className='cepInf'
    city.innerText=`Cidade: ${response.localidade} ,${response.uf}`
    d.appendChild(city)


    const bairro=document.createElement('p')
    bairro.className='cepInf'
    bairro.innerText=`Bairro: ${response.bairro}`
    d.appendChild(bairro)

    
    const street=document.createElement('p')
    street.className='cepInf'
    street.innerText=`Rua: ${response.logradouro}`
    d.appendChild(street)

    const ddd=document.createElement('p')
    ddd.className='cepInf'
    ddd.innerText=`DDD: ${response.ddd}`
    d.appendChild(ddd)


    const btt =document.createElement('button')
    btt.className='cepInf'
    btt.id='bttRm'
    btt.innerText='apagar'
    d.appendChild(btt)


}


const fecthApi=async(cep)=>{
    
    const dado =await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const response =await dado.json()
    console.log(response);

   

    getcep(response)

}


const ff =async(e)=>{
    e.preventDefault()
    const cepInf=document.querySelectorAll('.cepInf')
    cepInf.forEach((p)=>p.remove())
    fecthApi(i.value)
}




b.addEventListener('click',ff)
