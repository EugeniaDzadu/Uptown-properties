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

module.exports = {
    home,
    about,
    blog,
    agent,
    contact,
    blogSingle,
    properties,
    propertiesSingle,
    services
}