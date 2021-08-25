import Post from './model'

export const create = async (req, res) => {
    console.log(req);
    const wlll = await Post.create({ title:'liad',user:'liad',body:'liad' })

    res.sendStatus(200)
}

export const getAll = () => {
    console.log('liad');
}