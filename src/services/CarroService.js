const db= require('../db');
module.exports={
    buscarCarros: () =>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros', (error, results)=>{
                if(error){rejeitado(error);return;}
                aceito(results);
             });
        });
    },

    BuscaUm:(codigo)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros WHERE codigo= ?', [codigo],(error, results)=>{
                if(error){rejeitado:(error);return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
                
            } )
        })
       
    },
    inserir: (modelo, placa)=>{
        return new Promise((aceito, rejeitado)=>{
            db.query('INSERT INTO carros (modelo, placa) VALUES (?,?)',
             [modelo, placa],
              (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results.insertCodigo);
        })
    })
    },
    Alterando: (codigo, modelo, placa) => {
        return new Promise((aceito, rejeitado)=>{
            db.query("UPDATE carros SET modelo= ?, placa= ? WHERE codigo= ?",
            [modelo, placa, codigo], (error, results)=>{
                if(error){rejeitado(error); return;}
                aceito(results);

            })
        })
    }


}