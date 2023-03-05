const fecthApi=async(cep)=>{
    const dado =await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const response =await dado.json()
    console.log(response);
}

const input=document.querySelector('.inputBusca')

const botao=document.querySelector('.buscaBotao')



fecthApi('22020-002')