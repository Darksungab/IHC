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
        const hoje = new Date();
        const hojeFormatado = hoje.toISOString().split('T')[0];

        const resultado = veiculosModel.calcularValor(veiculo.diaria, retirada, devolucao);
        if (resultado.dataInvalidas == true){
            res.render ("disponibilidade",{veiculo, erro: resultado.mensagemErro,hojeFormatado} )
            return;
        }
        else{
            res.render("disponibilidade", {veiculo, hojeFormatado, ...resultado});

        }
        

        
        
    },
    exibirDisponibilidade (req,res){
    const id = req.params.id;
    const veiculo = veiculosModel.buscarPorId(id);
    const hoje = new Date();
    const hojeFormatado = hoje.toISOString().split('T')[0];
    res.render("disponibilidade", {veiculo, hojeFormatado});
    }
}

