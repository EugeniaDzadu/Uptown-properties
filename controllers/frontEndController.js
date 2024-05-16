const nodemailer = require('nodemailer');

const home = (req , res)=>{
    res.render('index')
}

const about = (req , res)=>{
    res.render('about')
}

const blog = (req , res)=>{
    res.render('blog')
}

const contact = (req , res)=>{
    res.render('contact')
}

const properties = (req , res)=>{
    res.render('properties')
}

const blogSingle = (req , res)=>{
    res.render('blogSingle')
}

const propertiesSingle = (req , res)=>{
    res.render('propertiesSingle')
}

const services = (req , res)=>{
    res.render('services')
}

const agent = (req , res)=>{
    res.render('agent')
}

const sendEmail = (req , res)=>{
    const { name, email, subject, message } = req.body;
    
    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: "smtp-relay.brevo.com",
        port: 587,
        secure: false,
        auth: {
      
          user: "690c53001@smtp-brevo.com",
          pass: "F08Yhy2xzTIcD94U",
        }
      });

      // Email content
    const mailOptions = {
        from: email,
        to: 'edzadu6@gmail.com', 
        subject: subject,
        text: message
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.send('Error: Something went wrong');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });

}

module.exports = {
    home,
    about,
    blog,
    agent,
    contact,
    blogSingle,
    properties,
    propertiesSingle,
    services,
    sendEmail
}