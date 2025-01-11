const app = require('./app');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());


app.listen()


