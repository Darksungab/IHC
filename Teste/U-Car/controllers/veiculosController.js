const veiculosModel = require("../models/veiculosModel");

module.exports = {
    exibirLista (req, res){
        const veiculos = veiculosModel.listar();
        res.render("veiculos", {veiculos});
    },
    exibirVeiculo(req, res){
        const id = req.params.id;
        const veiculoInfo = veiculosModel.buscarPorId(id);
        res.render("veiculo-info",{veiculoInfo})

    },
    calcularDisponibilidade(req, res){
        const id = req.params.id;
        const veiculo = veiculosModel.buscarPorId(id)

        const retirada = new Date(req.body.retirada);
        const devolucao = new Date(req.body.devolucao);

        const resultado = veiculosModel.calcularValor(veiculo.diaria, retirada, devolucao);

        

        res.render("disponibilidade", {veiculo, ...resultado});
        
    },
    exibirDisponibilidade (req,res){
    const id = req.params.id;
    const veiculo = veiculosModel.buscarPorId(id);
    res.render("disponibilidade", {veiculo});
    }
}

