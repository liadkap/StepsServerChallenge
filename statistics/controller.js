import Post from '../posts/model'

export const getTopCreators = ({ pipeline }) => Post.aggregate(pipeline)

export const getRuntime = async () => ({ count: await Post.countDocuments() })