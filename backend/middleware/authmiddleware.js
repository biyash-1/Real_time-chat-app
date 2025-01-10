import jwt from "jsonwebtoken";

const authenticate = (req,res,next) =>{

    const token = req.cookies.token;
    console.log(token);
    

    if(!token){
        return res.status(401).json({message:"You are not authorized to access this route"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }
    catch(error){
        res.status(401).json({message:"You are not authorized to access this route"});
    }

}

export default authenticate