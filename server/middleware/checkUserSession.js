module.exports = function (req, res, next) {
    if (!req.session.user) {
        req.session.user = { session_id: '', userid: '', email: '' }
    }
    next()
}