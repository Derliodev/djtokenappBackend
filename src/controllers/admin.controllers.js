require('dotenv').config();

exports.getAdmin = async (req, res)  =>{
    res.status(201).json({ message: 'usuario haciendo get a admin' });
}
