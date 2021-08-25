export default (req, res, next) => {
    req.pipeline?.push({
        $limit: 10
    });

    next()
}