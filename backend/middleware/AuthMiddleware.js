import TokenService from "../services/TokenService.js";
import ApiError from "../ApiError.js";

const checkAuth = (req, res, next) => {
    const accessToken = req.headers.authorization?.split(' ')?.[1];
    
    if (!accessToken) {
        throw ApiError.unauthorized('Access Token Required');
    }

    const decodedPayload = TokenService.verifyAccessToken(accessToken);
    req.auth = decodedPayload;
    next();
};


export default checkAuth;

