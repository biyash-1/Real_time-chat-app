import jwt from "jsonwebtoken";

const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  console.log('Token:', token); // Debug: Check if token is present in cookies
  
  if (!token) {
    return res.status(401).json({ message: "You are not authorized to access this route" });
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info to request
    next(); // Pass to the next middleware/route handler
  } catch (error) {
    console.error('Token verification failed:', error); // Log error for debugging
    res.status(401).json({ message: "You are not authorized to access this route" });
  }
}

export default authenticate;
