import bcrypt from 'bcrypt';

import ApiError from "../ApiError.js";
import UserService from "./UserService.js";
import TokenService from "./TokenService.js";

/**
 * Registers a new user with the provided user data and fingerprint.
 *
 * @param {Object} userData - The user data to be registered
 * @param {Object} fingerprint - The fingerprint of the user's device
 * @return {Promise<Object>} An object containing the access token and refresh token
 * @throws {ApiError} If the email is already registered
 */
const register = async (userData) => {
    const { email, password, role } = userData;

    let existingUser = await UserService.getUserByEmail(email);
    if (existingUser) {
        throw ApiError.badRequest('Email уже зарегистрирован');
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await UserService.createUser({ email, password: hashedPassword, role });  

    return newUser;
}

/**
 * Logs in a user with the provided email, password, and fingerprint.
 *
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @param {Object} fingerprint - The fingerprint of the user's device.
 * @return {Promise<Object>} An object containing the access token and refresh token.
 * @throws {ApiError} If the email is not registered or if the password is incorrect.
 */
const login = async (email, password) => {
    const user = await UserService.getUserByEmail(email);

    if (!user) {
        throw ApiError.unauthorized('Email не зарегистрирован');
    }

    const isMatch  = await bcrypt.compare(password, user.password);
    if (!isMatch ) {
        throw ApiError.unauthorized('Неверный логин или пароль');
    }

    return user;
}

const logout = async (refreshToken) => {
    await TokenService.revokeSession(refreshToken);
}

export default {
    register,
    login,
    logout,
}