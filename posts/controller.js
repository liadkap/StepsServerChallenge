import Post from './model'

export const create = async ({ body: { ...post } }, res) => {
    await Post.create(post)

    res.sendStatus(200)
}

export const getAll = () => Post.find({})

export const getCount = async () => ({ count: await Post.countDocuments() })