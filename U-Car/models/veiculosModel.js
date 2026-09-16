let veiculos = [
    { id: 1, nome: "Honda Fit", ano: 2011, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Automático", direcao: "Elétrica", portas: 4, bagageiro: "363L", diaria: 119.90, foto: "/img/veiculos/honda-fit-2011.png" },
    { id: 2, nome: "Toyota Corolla", ano: 2019, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Automático", direcao: "Elétrica", portas: 4, bagageiro: "470L", diaria: 189.90, foto: "/img/veiculos/toyota-corolla-2019.png" },
    { id: 3, nome: "Volkswagen Gol", ano: 2018, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Manual", direcao: "Hidráulica", portas: 4, bagageiro: "285L", diaria: 99.90, foto: "/img/veiculos/volkswagen-gol-2018.png" },
    { id: 4, nome: "Fiat Argo", ano: 2021, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Manual", direcao: "Elétrica", portas: 4, bagageiro: "300L", diaria: 109.90, foto: "/img/veiculos/fiat-argo-2021.png" },
    { id: 5, nome: "Hyundai HB20", ano: 2022, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Automático", direcao: "Elétrica", portas: 4, bagageiro: "300L", diaria: 129.90, foto: "/img/veiculos/hyundai-hb20-2022.png" },
    { id: 6, nome: "Chevrolet Onix", ano: 2020, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Manual", direcao: "Elétrica", portas: 4, bagageiro: "303L", diaria: 104.90, foto: "/img/veiculos/chevrolet-onix-2020.png" },
    { id: 7, nome: "Renault Kwid", ano: 2023, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Manual", direcao: "Elétrica", portas: 4, bagageiro: "290L", diaria: 89.90, foto: "/img/veiculos/renault-kwid-2023.png" },
    { id: 8, nome: "Jeep Renegade", ano: 2020, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Automático", direcao: "Elétrica", portas: 4, bagageiro: "320L", diaria: 219.90, foto: "/img/veiculos/jeep-renegade-2020.png" },
    { id: 9, nome: "Nissan Kicks", ano: 2022, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Automático", direcao: "Elétrica", portas: 4, bagageiro: "400L", diaria: 179.90, foto: "/img/veiculos/nissan-kicks-2022.png" },
    { id: 10, nome: "Ford Ka", ano: 2019, lugares: 5, combustivel: "Flex", ar_condicionado: "Sim", cambio: "Manual", direcao: "Hidráulica", portas: 4, bagageiro: "270L", diaria: 94.90, foto: "/img/veiculos/ford-ka-2019.png" }
];

module.exports = {
    listar(){
        return veiculos;
    },
    buscarPorId(id){
        const veiculoEncontrado = veiculos.find((valida) => valida.id == id);
        return veiculoEncontrado;
    },
    calcularValor(diaria, retirada, devolucao){
        const dias = (devolucao - retirada) / (1000 * 60 * 60 * 24);
        const subtotal = dias * diaria;
        const taxaServico = (diaria / 100) * 20;
        const total = subtotal + taxaServico;
        let dataInvalidas;
        const mensagemErro = "A data de devolução deve ser depois da retirada";
        
        if (dias <= 0){
            dataInvalidas = true;
            return {mensagemErro, dataInvalidas};
        }
        else{
            dataInvalidas = false;
        };

        return {dias, subtotal, taxaServico, total};
    }
}