import express from 'express'
import PostsRouter from '../../posts'
import StatisticsRouter from '../../statistics'


export default () => {
    const app = express()

    app.use(express.json());
    app.use(express.urlencoded());

    app.use('/posts', PostsRouter)
    app.use('/statistics', StatisticsRouter)


    app.listen(process.env.PORT, () => {
        console.log(`Steps server challenge is listening on port ${process.env.PORT}`);
    });
}
