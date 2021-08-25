export default (req, res, next) => {
    const pipeline = [
        {
            $group: {
                _id: '$user',
                count: { $sum: 1 }
            }
        }]

    req.pipeline = pipeline;
    next()
}