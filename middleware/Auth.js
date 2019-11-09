const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
    const token =   req.header('x-auth-token');
    // const token =   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzY3ODk0NTNlYTBkMDUzODQ4MTBkMiIsImlhdCI6MTU3MzI4ODE0OCwiZXhwIjoxNTczMjkxNzQ4fQ.mT9CywhTV6ffcT7iuFz_4arwuxXh6qtyMncBJOoivig'
    //check for token
    if (!token) {
        return res.status(401).json({ msg: 'No token indentified, authorization denied' }); //unauth
    }
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkYzQ0ODU5NGYyMGUzMTVhNDgxZTU5NCIsImlhdCI6MTU3MzIzNjIzOSwiZXhwIjoxNTczMjM5ODM5fQ.wROyoznRxIjeqvxQjdeQ_3iolIKGLruleboMIG-6UD0
    try {
        //verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // decoded
        //     [0] { id: '5dc448594f20e315a481e594',
        //     [0]   iat: 1573236239,
        //     [0]   exp: 1573239839 }

        //add user from payload
        req.user = decoded;
        // req.user
        //     [0] { id: '5dc448594f20e315a481e594',
        //     [0]   iat: 1573236239,
        //     [0]   exp: 1573239839 }

        next();
    } catch (e) {
        res.status(401).json({ msg: 'Token is not valid' }); //unauth
    }

}
module.exports = auth;