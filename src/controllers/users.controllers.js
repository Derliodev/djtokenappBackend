require('dotenv').config();

exports.getUsers = async (req, res)  =>{
    res.status(201).json({ message: 'usuario haciendo call a users' });
}