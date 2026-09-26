const express = require('express');
const app = express();

let PORT = 8000;



// GET API
app.use(express.json())
app.get('/', (req, res) => {

    if (req.url === '/') {
        let obj = {
            name: 'wscubetech',
            batch: 'WSB-227'
        };

        res.send(JSON.stringify(obj));
    }

    res.status(200).json({
        _status: true,
        _data: obj
    })
})

// POST API
app.use (express.json());
app.post('/create', (req, res) =>{

    let {useradmin, userpassword} = req.body;

    res.status(201).json({
        _status: true,
        useradmin,
        userpassword


    })


})




app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
