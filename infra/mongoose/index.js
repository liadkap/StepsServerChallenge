import mongoose from 'mongoose';

export default async () => {
    await mongoose.connect(process.env.MONGO_ADDRESS, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log(`connected to mongo at address ${process.env.MONGO_ADDRESS}`);
}