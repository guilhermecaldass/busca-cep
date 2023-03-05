const fecthApi=async(cep)=>{
    const dado =await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const response =await dado.json()
    console.log(response);
}
fecthApi('22020-002')