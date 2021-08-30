import Post from '../posts/model'
import Runtime from './runtime.model'

export const getTopCreators = ({ pipeline }) => Post.aggregate(pipeline)

export const getRuntime = async () => {
    const result = await Runtime.aggregate([
        {
            $group: {
                _id: '$name',
                totalRuns: { $sum: 1 },
                totalTime: { $sum: '$time' }
            }
        }
    ])

    return result.map(({ _id, totalRuns, totalTime }) => ({ name: _id, avg: `${totalTime / totalRuns} milliseconds` }))
}


export const saveRuntime = async (name, time) => {
    await Runtime.create({ name, time })
}