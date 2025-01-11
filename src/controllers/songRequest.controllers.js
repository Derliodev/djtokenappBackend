require('dotenv').config();

exports.songRequest = async (req, res)  =>{
    res.status(201).json({ message: 'usuario haciendo consulta en canciones' });
}