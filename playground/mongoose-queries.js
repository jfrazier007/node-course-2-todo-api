
const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//var id = '5a616b82708c17a512e71efc11';
var id = '5a61501b22a4f480116048cb';

/*if (!ObjectID.isValid(id)){
	console.log('ID not valid');
}*/

/*Todo.find({
	_id: id
}).then((todos) =>{
	console.log('Todos', todos);
});


Todo.findOne({
	_id: id
}).then((todo) =>{
	console.log('Todo', todo);
});

Todo.findById(id).then((todo) =>{
	if(!todo) {
		return console.log('Id not found');
	}
	console.log('Todo By Id', todo);
}).catch((e)=> console.log(e));*/

User.findById(id).then((user) =>{
	if(!user) {
		return console.log('User not found');
	}
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e)=> console.log(e));

