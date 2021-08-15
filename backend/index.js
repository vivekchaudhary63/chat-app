const express = require('express');
const app = express();

const port = require('./config').port;


const userRouter = require('./routers/userManager');
const utilRouter = require('./routers/utils');

const cors = require('cors');

const server = require('http').createServer(app);
const io = require('socket.io')(server, { cors: { origin: 'http://localhost:3000' } });

const teams = [];

io.on('connection', (socket) => {
    console.log('client connected');
    socket.broadcast.emit('newteam', teams);

    socket.on('send', (data) => {
        console.log(data);

        socket.to(data.team).emit('rec', data);
        console.log('team message in : ' + data.team)
    })

    socket.on('createteam', (data) => {
        socket.join(data.team);
        console.log('client created ' + data.team);
        teams.push(data.team);
        socket.broadcast.emit('newteam', teams);
    })

    socket.on('jointeam', (team) => {
        socket.join(team);
        console.log('client joined ' + team);

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