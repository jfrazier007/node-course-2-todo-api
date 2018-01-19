// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,  ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
	if(err){
		return console.log('Unable to connect to MondoDB server.');
	}
	console.log('Connected to MongoDB server.');

	// deleteMany
	// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
	// 	console.log(result);
	// });
	// deleteOne
	// db.collection('Users').deleteMany({name: 'Jeff Frazier'}).then((result)=>{
	// 	console.log(result);
	// });
	// findOneAndDelete
	db.collection('Users').findOneAndDelete({ _id: new ObjectID("5a5ec74d02a9380e2e72b786") }).then((result)=>{
		console.log(result);
	});

	//db.close();
});