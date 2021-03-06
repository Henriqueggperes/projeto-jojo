const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();
const routes = require("./src/routes/personagem.route");

//Configurando nossa aplicaçao para trabalhar com json
app.use(express.json());
app.use(cors());
app.use('/personagens',routes);
// Definindo dados para usar na aplicacao

const characters = [
  {
    id: 1,
    personagem: "Jotaro Kujo",
    stand: "Star Platinum",
    standstatus: "S+",
    habilidades: "Parar o tempo",
    foto: "https://66.media.tumblr.com/cfa20f9738ea45c49300864a485c4a06/3307238277563ca1-ad/s250x400/ed458ec2f4efd1e29938958223eba77a0ebe488b.gifv",
    descricao:
      "Jotaro Kujo, um dos usuários de stand mais fortes dentro do universo de Jojo's Bizarre Adventures. Utilizando do poder de seu Stand Star Platinum, pode parar o tempo com uma duração definida (Sendo a mais longa a duração de 5 segundos). ",
  },
  {
    id: 2,
    personagem: "Dio",
    stand: "The World",
    standstatus: "S",
    habilidades: "Parar o tempo (WRYYY)",
    foto: "https://64.media.tumblr.com/1deb9b74b6660569e628eabd3df74917/tumblr_o3f40io5ay1sh11j9o1_500.gifv",
    descricao:
      "Dio Brando, assim como o inimigo que o derrotou, era extremamente poderoso. Tal poder não vinha só de seu Stand, mas também de suas capacidades sobrehumanas que lhes foram presenteadas através da máscara de pedra, que lhe transformou em um vampiro.",
  },
];

app.get("/personagens/find-personagem/:id", (req, res) => {
  const idParam = req.params.id;
  const chosenCharacter = characters.find(
    (character) => character.id == idParam
  );
  res.send(chosenCharacter);
});

app.listen(port, () => {
  console.log(`A aplicação está rodando em http://localhost:${port}`);
});
