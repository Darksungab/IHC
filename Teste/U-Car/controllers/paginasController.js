module.exports = {
    getInicio(req,res){
        res.render('inicio');
    },
    getLocacoes(req,res){
        res.render('minhas-locacoes');
    },
    getPerfil (req, res){
        res.redirect('/login');
    },
    getContato (req, res){
        res.render('contato');
    },
    getSair (req, res){
        res.render('sair');
    }
};