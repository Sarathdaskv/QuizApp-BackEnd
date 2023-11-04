const jwt = require('jsonwebtoken')

function checkAuthentication(req, res, next) {
    try {
        const token=req.headers.authorization.split(" ")[1];
        jwt.verify(token,process.env.JWT_SECRET_KEY);
        next();
    }
    catch (err) {
        res.status(401).json({
            message: "Auth failed!!"
        })
    }
}

module.exports = { checkAuthentication }