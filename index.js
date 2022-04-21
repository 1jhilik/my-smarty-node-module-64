const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('This is me the Smart Jhilik.Amar matha betha korse akhn')
})

const users = [
    {id:1 , name: "Sabana", email: "sabana@gmail.com", phone: '0178888888'},
    {id:2 , name: "Rojina", email: "rojina@gmail.com", phone: '0178888888'},
    {id:3 , name: "Shabnoor", email: "shabnoor@gmail.com", phone: '0178888888'},
    {id:4 , name: "Suchorita", email: "suchorita@gmail.com", phone: '0178888888'},
    {id:5 , name: "Shuchonda", email: "shuchonda@gmail.com", phone: '0178888888'},
    {id:6 , name: "Popy", email: "popy@gmail.com", phone: '0178888888'},
    {id:7 , name: "purnima", email: "purnima@gmail.com", phone: '0178888888'},
]

//filter by search query parameter
app.get('/users', (req, res) =>{
    if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }
    else{
        res.send(users)
    }
   
    
})
app.get('/users/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.post('/user', (req, res) =>{
    console.log('request' ,req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.get('/fruits',(req, res) =>{
    res.send(['mango', 'apple', 'oranges'])
});
app.get('/fruits/mango/fazli',(req, res) =>{
    res.send('sour sour fazlii flavor');
});

app.listen(port, () =>{
    console.log('This for the on port display',port)
})