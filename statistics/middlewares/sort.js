export default (req, res, next) => {
    req.pipeline?.push({
        $sort: { count: -1 }
    });

    next()
}