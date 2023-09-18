const jwt = require("jsonwebtoken");
const { createError } = require("./error");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; // getting the access from the cookies in the auth controllers

  if (!token) {
    return next(createError(401, "You are not authenticated"));
  }

  //if there is a token, now it should be verified
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  //To verify a user, you need to be authenticated first so we use the verifyToken function over here
  verifyToken(req, res, () => {
    //req.user.id is in the jwt token
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized"));
    }
  });
};

const verifyAdmin = (req, res, next) => {
  //To verify an admin, you need to be authenticated and also have role of 'admin'
  verifyToken(req, res,  () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

module.exports = { verifyToken, verifyUser, verifyAdmin };
