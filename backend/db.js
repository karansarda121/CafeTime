const mongoose = require('mongoose');
const mongoURI='mongodb+srv://20ucs093:123456abc@cluster0.zn3hkke.mongodb.net/gofoodmern?retryWrites=true&w=majority'


const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected`);

        //Access the "food_items" collection
        const collection = mongoose.connection.db.collection("food_items");
        const collection1 = mongoose.connection.db.collection("foodCategory");

        // Fetch data from the collection
        const data = await collection.find({}).toArray();
       const data1 = await collection1.find({}).toArray();

        // Display the fetched data
         
        global.food_items = data;
        global.foodCategory = data1;

    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
module.exports=mongoDB;

