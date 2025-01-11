require('dotenv').config();

exports.getDjs = async (req, res)  =>{
    res.status(201).json({ message: 'usuario haciendo get a Djs' });
}
