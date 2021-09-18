const CarroService= require('../services/CarroService');
module.exports={
    buscarCarros: async(req, res)=>{
        let json={error:'',result:[0]};

        let carros= await CarroService.buscarCarros();

        for(let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao:carros[i].modelo,
            })
        }
        res.json(json);
    },

    BuscarUm: async(req, res) => {
        let json = {error:'', result:{}};
        let codigo= req.params.codigo;
        let carro= await CarroService.BuscaUm(codigo);
        if(carro){
            json.result= carro;
        }
        res.json(json)
    },
    inserir: async(req, res)=>{
        let json= {error:'', result:{}};

        let modelo= req.body.modelo;
        let placa= req.body.placa;

        if(modelo && placa){
            let CarroCodigo= await CarroService.inserir(modelo, placa)
            json.result= {
                codigo:CarroCodigo,
                modelo,
                placa
            };
        }else{
            json.error= 'Conteudo não form inseridos';
        }
        res.json(json)

    },
    Alterar: async(req, res)=>{
        let json= {error:'', result:{}};

        let codigo= req.params.codigo;
        let modelo= req.body.modelo;
        let placa= req.body.placa;
        if(codigo && modelo && placa){
            await CarroService.Alterando(codigo, modelo, placa)
            json.result={
                codigo,
                modelo,
                placa
            }
        }else{
            json.error= "Campos nao enviado"
        }
        res.json(json);       
    },
    Deletar: async(req, res)=>{
        let json={error:'', result:{}};
        await CarroService.Deletando(req.params.codigo)
    }

}