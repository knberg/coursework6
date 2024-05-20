import jwt from 'jsonwebtoken'
import { v4 as uuid } from 'uuid';
import config from '../config.js';
import RefreshSession from '../models/RefreshSession.js';
import UserService from './UserService.js';
import ApiError from '../ApiError.js';

const generateAccessToken = (payload) => {
    return jwt.sign(payload, config.jwt.access.secret, { expiresIn: config.jwt.access.expire });
};

const generateRefreshToken = () => {
    return uuid();
};

const generateTokens = async (user, fingerprint) => {
    const accessToken = generateAccessToken({ userId: user.id, role: user.role });
    const refreshToken = generateRefreshToken();

    await RefreshSession.create({ 
        user_id: user.id, 
        token: refreshToken, 
        fingerprint: fingerprint.hash,
        expire: Date.now() + config.jwt.refresh.expire * 1000,
     });

    return { accessToken, refreshToken };
}

const verifyAccessToken = (token) => {
    try {
        return jwt.verify(token, config.jwt.access.secret);
    } catch (err) {
        throw ApiError.forbidden('Invalid access token');
    }
}

export const revokeSession = async (refreshToken) => {
    if (!refreshToken) {
        throw ApiError.unauthorized('No refresh token provided');
    }

    const deletedRows = await RefreshSession.destroy({
        where: { token: refreshToken }
    });

    if (deletedRows === 0) {
        throw ApiError.unauthorized('User session not found');
    }
};

const refreshTokens = async (refreshToken, fingerprint) => {
    if (!refreshToken) {
        throw ApiError.unauthorized('Invalid Refresh Token');
    }

    const session = await RefreshSession.findOne({ where: { token: refreshToken } });

    if (!session) {
        throw ApiError.unauthorized('Invalid Refresh Token');   // сессии не существует
    }
    if (session.fingerprint !== fingerprint.hash) {     // токен пользователя украли
        throw ApiError.forbidden('Попытка несанкционированного обновления токена');
    }

    await RefreshSession.destroy({ where: { token: refreshToken } });

    const user = await UserService.getUserById(session.user_id);
    const tokens = await generateTokens(user, fingerprint);
    return tokens;
};



export default { 
    generateAccessToken, 
    generateRefreshToken,
    generateTokens,
    verifyAccessToken,
    refreshTokens,
    revokeSession
};