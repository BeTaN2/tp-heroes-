const { log } = require('console');
const express = require('express')
const app = express();
const port = 3030;



app.listen(port, () => log("server running in http://localhost:"+ port))