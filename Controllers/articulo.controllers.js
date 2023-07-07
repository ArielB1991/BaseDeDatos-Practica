const db= require('../Models');

exports.lista= (req,res)=> {
    console.log('');
    db.articulo.findAll().then((result) => {
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
db.compra.findAll({where: {[campo]:valor}}).then(result=>{
    res.status(200).send(result);
    
}).catch(error=>{
    res.status(500).send(error);

})


exports.nuevoArt=  (req,res)=>{
    console.log(req.body.nombre);

    const dnuevoArt={
        nombre: req.body.nombre,
        identificador: req.body.identificador,
        descripcion: req.body.descripcion,
        cantidad: req.body.cantidad,
        precio: req.body.precio
    };
    db.articulo.articulo(dnuevoArt).then(result=>{
        res.status(200).send({
            data: result,
            estado: true 
        });
    });
};


exports.act= (req,res)=> {
    const ID= req.params.ID;

    console.log(req.body.ID);

    
    const dArt={
        nombre: req.body.nombre,

    };
    db.articulo.update(dArt,{
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
                        data: dArt,
                        id:ID
                    }}
            )};
        })
    };

    exports.eliminar= (req,res) =>{
        const ID= req.params.ID;
        db.articulo.destroy({
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
                    data: dArt,
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



    



