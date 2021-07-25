const express = require('express');
const app = express();

const port = require('./config').port;


const userRouter = require('./routers/userManager');
const utilRouter = require('./routers/utils');

const cors = require('cors');

const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:3000' } });

io.on('connection', (socket) => {
    console.log('client connected');

    socket.on('send', (data) => {
        console.log(data);

        socket.broadcast.emit('rec', data);
    })
})


app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));

app.get('/home', (req, res) => {
    res.send("Welcome Home");
})


server.listen(port, () => {
    console.log('server started at port 5000')
})