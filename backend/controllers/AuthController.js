import AuthService from "../services/AuthService.js";
import TokenService from "../services/TokenService.js";
import config from "../config.js";

const cookieOptions = { 
    httpOnly: true, 
    // path: '/refresh',
    // maxAge: config.jwt.refresh.expire * 1000 
};

const register = async (req, res, next) => {
    const userData = req.body;
    const { fingerprint } = req;

    try {
        const user = await AuthService.register(userData);
        const { accessToken, refreshToken } = await TokenService.generateTokens(user, fingerprint);
        res.cookie('refreshToken', refreshToken, cookieOptions);
        res.json({ accessToken });
    } catch (err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const { fingerprint } = req;

    try {
        const user = await AuthService.login(email, password);
        const { accessToken, refreshToken } = await TokenService.generateTokens(user, fingerprint);
        res.cookie('refreshToken', refreshToken, cookieOptions);
        res.json({ accessToken });
    } catch (err) {
        next(err);
    }
}

const logout = async (req, res, next) => {
    const { refreshToken } = req.cookies;

    try {
        await AuthService.logout(refreshToken);
        res.clearCookie('refreshToken');
        res.json({ message: 'Logged out successfully' });
    } catch (err) {
        next(err);
    }
};

const refreshTokens = async (req, res, next) => {
    const { refreshToken } = req.cookies;
    const { fingerprint } = req;
    
    try {
        const newTokens = await TokenService.refreshTokens(refreshToken, fingerprint);
        res.cookie('refreshToken', newTokens.refreshToken, cookieOptions);
        res.json({ accessToken: newTokens.accessToken });
    } catch (err) {
        next(err);
    }
};

export default {
    register,
    login,
    logout,
    refreshTokens,
}