// const MongoClient = require('mongodb').MongoClient;

const {MongoClient,  ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
	if(err){
		return console.log('Unable to connect to MondoDB server.');
	}
	console.log('Connected to MongoDB server.');

	
	// db.collection('Todos').findOneAndUpdate(
	// 	{_id: new ObjectID('5a6142c28b5d3befcebfc1df')},
	// 	{$set:{completed: true}},
	// 	{returnOriginal: false}

	// ).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate(
		{_id: new ObjectID('5a5ec82ac312120e33a38019')},
		{$inc:{age: 1},
		$set: {name: 'Jeff'}},
		{returnOriginal: false}

	).then((result)=>{
		console.log(result);
	});

	//db.close();
});