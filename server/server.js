const express = require('express');

const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port = 3000;



app.use('/server', require('./Routes/basic'));
app.use('/scrum', require('./Routes/scrum'));
app.use('/board', require('./Routes/board'));

app.listen(port, () => console.log(`Server running on port ${port}`));