/*---------------------------------------
Importamos el modelo
--------------------------------------*/
const Contact = require('../Models/contact.model');

const nodemailer =  require('nodemailer');

/*---------------------------------------
Funcion POST
--------------------------------------*/

let sendEmail = (req,res)=>{

    //Obtenemos los datos del formulario
    let body = req.body;

    //Obtenemos los datos del formulario para pasarlos al modelo
    // let contact = new Contact({

    //     name: body.name,
    //     email: body.email,
    //     message: body.message

    // });

    //Guardamos en MongoDB
    //https://mongoosejs.com/docs/api.html#model_Model-save

    // contact.save((err,data)=>{

    //     if(err){

    //         return res.json({
    //             status:400,
    //             mensaje:"Error al guardar el slide",
    //             err
    //         });

    //     }

    //     res.json({

    //         status:200,
    //         data,
    //         mensaje:"El slide ha sido creado con exito"

    //     })
        
    // })

    var transporter = nodemailer.createTransport({
       
        host: "smtp.gmail.com",
        port: 465,
        auth:{
            user:'',
            pass:''
        }

    });
    console.log(transporter);
    const mailOptions = {
        from: `”${body.name} 👻” <>`,
        to: 'suarezsuarezana20@gmail.com', // Cambia esta parte por el destinatario
        subject: 'Mensaje de prueba - Portfolio Ana Suarez',
        html: `
        <strong>Nombre:</strong> ${body.name} <br/>
        <strong>E-mail:</strong> ${body.email} <br/>
        <strong>Mensaje:</strong> ${body.message}`
    };
    console.log(mailOptions);
    transporter.sendMail(mailOptions, (err, info) => {
    
        if(err){

            return res.json({
                status:400,
                mensaje:"Error al enviar el correo",
                err
            });

        }

        res.json({

            status:200,
            mensaje:"El correo ha sido enviado con exito",
            info

        })

    })

}
 

/*---------------------------------------
EXPORTAMOS LAS FUNCIONES DEL CONTROLADOR
--------------------------------------*/

module.exports = {
   sendEmail
}