import mongoose from "mongoose";

const connection = () => {
    try {
        mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(response => {
                console.log(response.connection.host);
                console.log('Database connected successfully');
            })
    } catch (error) {
        console.log(error.message);
    }
}

export default connection;