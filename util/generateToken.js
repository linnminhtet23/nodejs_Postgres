const jwt = require('jsonwebtoken');

function generateToken({user_id, user_name, user_email}){
    const user = {user_id, user_name, user_email};
    const accessToken = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: "365d"});
    const refreshToken = jwt.sign(user, process.env.REFERESH_JWT, {expiresIn: "365d"});
    return ({accessToken,refreshToken});
}
module.exports=  {generateToken};