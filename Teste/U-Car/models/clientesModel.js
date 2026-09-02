let clientes = [
    { id: 1, nome: "Gabriel Ribeiro", email: "gabriel@teste.com", senha: "123456" },
    { id: 2, nome: "Melissa Biscaia", email: "melissa@teste.com", senha: "senha123" }
];

module.exports = {
    cadastrar(cliente){
        cliente.id = clientes.length + 1;
        clientes.push(cliente);
    },
    autenticar(email, senha){
        const cliente = clientes.find((c) => c.email == email && c.senha == senha);
        return cliente;
    },
    exibir(){
        return clientes;
    }
}