import express from 'express'

export default () => {
    const app = express()
    app.get('/', () => {
        console.log('hello world');
    })

    app.listen(process.env.PORT, () => {
        console.log(`Steps server challenge is listening on port ${process.env.PORT}`);
    });
}
