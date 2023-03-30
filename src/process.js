
const pesquisar = process.argv[2]
const paises = require("./countries")

const pesquisaPaises = [];

paises.forEach((item)=>{
  const str = item.name.toLowerCase();

   if(str.includes(pesquisar.toLowerCase())){ 
    pesquisaPaises.push(
      {
        "id":item.id,
        "name": item.name,
        "capital":item.capital,
        "continent":item.continent}
        )
    }
   })

  console.table(pesquisaPaises)
 
