const express = require("express");
const bodyParser = require('body-parser');
const handlebars = require("express-handlebars");
          // qual pacote?
const paginasController = require("./controllers/paginasController");   // caminho pro seu controller
const veiculosController = require("./controllers/veiculosController");
const clientesController =require("./controllers/clientesController");

const app = express();

app.engine('handlebars', handlebars.engine({
    defaultLayout: 'layout',   // nome do seu arquivo de layout, sem extensão
    layoutsDir: __dirname + '/views/'   // qual pasta?
}));
app.set('view engine', 'handlebars');
app.set("views", __dirname + "/views/");
app.use(express.static(__dirname + '/public'));   // qual pasta tem seus arquivos estáticos?
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', paginasController.getInicio);   // qual função do seu controller?
app.get('/veiculos', veiculosController.exibirLista);
app.get('/veiculos/:id', veiculosController.exibirVeiculo);
app.get('/veiculos/:id/disponibilidade', veiculosController.exibirDisponibilidade);
app.post('/veiculos/:id/disponibilidade', veiculosController.calcularDisponibilidade);
app.get('/minhas-locacoes', paginasController.getLocacoes);
app.get('/perfil', paginasController.getPerfil);
app.post('/login', clientesController.autenticar);
app.get('/login', clientesController.exibirLogin);
app.get('/cadastrar', clientesController.exibirCadastro);
app.post('/cadastrar', clientesController.cadastrarCliente);
app.get('/contato', paginasController.getContato);
app.get('/sair', paginasController.getSair);

app.listen(process.env.PORT || 3000, function() {
    console.log("server.js rodando!");
});