const express = require('express')
const cors = require('cors')
const path = require('path')
const contactsModel = require('./models').contactsModel;
app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.get('/getAll', (req,res) => {
	res.status(200);
	contactsModel.findAll().then((data) => res.json(data));
})

app.get('/delete/:id', (req,res) => {
	contactsModel.destroy({ where: { id: req.params.id }});
	res.status(200);
	res.send({"message":"success"});
})

app.post('/addContact', (req,res) => {
	const { name, title, phone, address, note } = req.body;
	contactsModel.create({
		name: name,
		title: title,
		phone: phone,
		address: address,
		note: note
	});
	res.status(200);
	res.send({"message":"success"});
})


app.listen(3031,()=> {
	console.log('Backend Running On 3031');
})
