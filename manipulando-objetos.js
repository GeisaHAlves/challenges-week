const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   }
    cliente.animalEstimacao = [{
    nome: "Kripto",
    raça: "Cão",
    vacinado: true
   }]
    cliente.animalEstimacao.push({
    nome: "Lex",
    raça: "Gato",
    vacinado: false
   })

   const animalEstimacao = cliente.animalEstimacao.filter(animalEstimacao => animalEstimacao.raca === "Cão")
   console.log(cliente.animalEstimacao[0].nome)