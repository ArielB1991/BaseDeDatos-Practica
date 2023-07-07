const db= require('../Models');

exports.lista= (req,res)=> {
    db.clases.findAll().then((result) => {
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
db.clases.findAll({where: {[campo]:valor}}).then(result=>{
    res.status(200).send(result);
    
}).catch(error=>{
    res.status(500).send(error);

})

exports.nuevaClase=  (req,res)=>{
    console.log(req.body.nombre);

    const dnuevaClase={
        nombre: req.body.nombre
    };
    db.clases.clases(dnuevaClase).then(result=>{
        res.status(200).send({
            data: result,
            estado: true 
        });
    });
};


exports.act= (req,res)=> {
    const ID= req.params.ID;

    console.log(req.body.ID);

    
    const dclase={
        nombre: req.body.nombre,
    };
    db.clases.update(dclase,{
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
                        data: dclase,
                        id:ID
                    }}
            )};
        })
    };

    exports.eliminar= (req,res) =>{
        const ID= req.params.ID;
        db.clases.destroy({
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
                    data: dclase,
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



    



