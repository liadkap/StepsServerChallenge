export default (req, res, next) => {
    req.pipeline?.push({
        $project: { _id: true }
    });

    next()
}