import mongoose from "mongoose";

const connect = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${connection.connection.host}`.yellow.underline.bold);
    } catch (error) {
        console.log(`Error: ${error.message}`.red);
        process.exit(1);
    };
};

export default connect;

// expensetracker
// 0D7xDniWLFcesr4l