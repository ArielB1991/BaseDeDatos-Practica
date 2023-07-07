const db= require('../Models');

exports.lista= (req,res)=> {
    console.log('');
    db.articuloxCompra.findAll().then((result) => {
        res.status(200).send(result);
    }).catch(error => {
        res.status(500).send(error)
    });
};

exports.filtro=(req,res)=> {
    console.log('Procesamiento');
    const campo= req.params.campo;
    const valor= req.params.valor;

    console.log(`campo: ${campo} valor:${valor}`)

}
db.articuloxCompra.findAll({where: {[campo]:valor}}).then(result=>{
    res.status(200).send(result);
    
}).catch(error=>{
    res.status(500).send(error);

})
exports.nuevaC=  (req,res)=>{
    console.log('*****');

    const dnuevoArtxCompra={
       pU: req.body.pU,
       cantidad: req.body.cantidad
    };
    db.articuloxCompra.articuloxCompra(dnuevoArtxCompra).then(result=>{
        res.status(200).send({
            data: result,
            estado: true 
        });
    });
};


exports.act= (req,res)=> {
    const ID= req.params.ID;

    console.log(req.body.ID);

    
    const dArtxComp={
        pU: req.body.pU,
       cantidad: req.body.cantidad
    };
    db.articuloxCompra.update(dArtxComp,{
        where: {id: ID} })
    .then(num=> {
        if(num> 0){
            res.status(200).send({
                resultado:true,
                mensaje: 'registro actualizado'
        
            });
        }else{
            res.status(500).send(
                {
                    resultado: false,
                    mensaje:'No se realizo la actualizacion',
                    body:{
                        data: dArtxComp,
                        id:ID
                    }}
            )};
        })
    };

    exports.eliminar= (req,res) =>{
        const ID= req.params.ID;
        db.compra.destroy({
            where: {id:ID}
        })
        .then(num=> {
        if(num >0){
            res.status(200).send
            {resultado: true}
        }
        else{
            res.status(500).send({
                resultado: false,
                mensaje: 'No se pudo eliminar',
                body:{
                    data: dArtxComp,
                    id: ID
                }
            })
        }
    })

    .catch(error=> {
        console.log(error);
        res.status(500).send(
            {   resultado:false,
            mensaje: error
        }
        );
    });
};