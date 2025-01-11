require('dotenv').config();

exports.login = async (req, res)  =>{
    res.status(201).json({ message: 'usuario haciendo login' });
}

exports.recovery = async (req, res)  =>{
    res.status(201).json({ message: 'usuario haciendo recovery' });
}

exports.register = async (req, res)  =>{
    res.status(201).json({ message: 'usuario haciendo register' });
}