const express = require('express');


const app = express();

const port = 3000;



app.use('/server', require('./Routes/basic'));

app.listen(port, () => console.log(`Server running on port ${port}`));