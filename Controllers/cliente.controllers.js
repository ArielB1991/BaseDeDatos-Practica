const db= require('../Models');

exports.lista= (req,res)=> {
    console.log('');
    db.cliente.findAll().then((result) => {
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
db.cliente.findAll({where: {[campo]:valor}}).then(result=>{
    res.status(200).send(result);
    
}).catch(error=>{
    res.status(500).send(error);

})


exports.nuevoCliente=  (req,res)=>{
    console.log(req.body.nombre);

    const dnuevoCliente={
        nombre: req.body.nombre,
        dni: req.body.dni,
        email: req.body.email,
       
    };
    db.cliente.cliente(dnuevoCliente).then(result=>{
        res.status(200).send({
            data: result,
            estado: true 
        });
    });
};


exports.act= (req,res)=> {
    const ID= req.params.ID;

    console.log(req.body.ID);

    
    const dCliente={
        nombre: req.body.nombre,
        dni: req.body.dni,
        email: req.body.email,

    };
    db.articulo.update(dCliente,{
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
        db.cliente.destroy({
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
