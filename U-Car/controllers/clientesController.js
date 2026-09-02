const clientesModel = require("../models/clientesModel");

module.exports = {
    exibirCadastro(req, res){
        res.render("cadastro");
    },
    cadastrarCliente(req, res){
        const dadosFormulario = req.body;
        clientesModel.cadastrar(dadosFormulario);
        res.redirect("/login");
    },
    autenticar(req, res){
        const email = req.body.email;
        const senha = req.body.senha;
        const autenticado = clientesModel.autenticar(email, senha);
        res.render("login", { autenticado, tentouLogin: true });
    },
    exibirLogin(req, res){
        res.render("login");
    }
}
