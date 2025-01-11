const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const auth = require('./src/routes/auth.routes');
const user = require('./src/routes/user.routes');
const djs = require('./src/routes/dj.routes');
const admin = require('./src/routes/admin.routes');
const songs = require('./src/routes/songRequest.routes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/auth/', auth);
app.use('/users/', user);
app.use('/djs/', djs);
app.use('/admin/', admin);
app.use('/songs/', songs);

const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});

module.exports = app