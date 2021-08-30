import Post from './model'
import { saveRuntime } from '../statistics/controller'

export const create = async ({ body: { ...post } }, res) => {
    const startTime = Date.now()
    await Post.create(post)
    const endTime = Date.now()

    saveRuntime('getAll', endTime - startTime)
    res.sendStatus(200)
}

export const getAll = async () => {
    const startTime = Date.now()
    const posts = await Post.find({})
    const endTime = Date.now()

    saveRuntime('getAll', endTime - startTime)
    return posts
}

export const getCount = async () => ({ count: await Post.countDocuments() })