
module.exports = function(app){
    app.get('/pagamentos', function(req, res) {
        res.send('teste');
    });

    app.post('/pagamentos/pagamento', function(req, res){
        var pagamento = req.body;
        console.log('processando requisição pagamento');

        pagamento = {
            status: 'CRIADO'
        }

        res.send(pagamento);
    });
}
