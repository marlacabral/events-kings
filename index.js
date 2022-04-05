const express = require('express');
const cors = require("cors")
const port = 3001;

const app = express();
app.use(cors());

app.use(express.json());

const staff = [
    {
        id: 1,
        name: "Marla Cabral",
        idade: "32",
        email: "devmarlacabral@gmail.com",
        whatsapp: "51996140140",
        fone: "7398517608",
        rg: "8093744012",
        cpf: "01361186070",
        experienceEvents: "Garçonete, bar, caixa",
        pic: "./assets/img1.png",
        adress: "Rua Dorval Marques, 166 Santa Teresa Porto Alegre/RS"
    },
    {
        id: 2,
        name: "José Júnior",
        idade: "22",
        email: "jose@gmail.com",
        whatsapp: "51994140242",
        fone: "51994140242",
        rg: "5096276265",
        cpf: "04069158065",
        experienceEvents: "Bar",
        pic: "./assets/img2.png",
        adress: "Rua A, 100 Porto Alegre/RS"
    }
];

app.get('/', (req, res) => {
    res.send(staff);
})

app.get('/staff', (req, res) => {
    res.send(staff);
})

app.get('/staff/find/(:id)?', (req, res) => {
    const idParam = req.params.id;
    const unicColaborador = staff.find((colaborador) => colaborador.id == idParam);
    console.log(unicColaborador);
    if(unicColaborador === undefined){
        res.send({message: "Nenhum colaborador encontrado"});
    }
    res.send(unicColaborador);
});


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});
