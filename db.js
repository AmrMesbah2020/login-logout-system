const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const dbURI = 'mongodb+srv://HafsaTrirat:qH1i1FzXe6SSMW39@nodetuts.mjc1cje.mongodb.net/node-tuts?retryWrites=true&w=majority';
        const connect = await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`mongo connected`);
        app.listen(3000);
        console.log(`hostname: ${connect.connection.host}`);
    } catch (err) {
        console.log(err);
    }
}
module.exports = connectDB;