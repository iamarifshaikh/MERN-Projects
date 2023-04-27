import mongoose from 'mongoose';

const connect = async () => {
    mongoose.connect(process.env.DB_URL);
    console.log("Successfully Connected To MongoDB Server!")
}

export default connect;

// who_know_me_better
// Bbya3tIcPySsQTSA