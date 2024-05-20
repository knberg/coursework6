import UserService from "../services/UserService.js";


const getProfile = async (req, res, next) => {
    try {
        const user = await UserService.getProfile(req.user);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
}


export default {
    getProfile
};