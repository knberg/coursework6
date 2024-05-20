import User from '../models/User.js';
import JobSeeker from '../models/JobSeeker.js';
import Employer from '../models/Employer.js';


const getUserById = async (id) => {
    return User.findByPk(id);
}

const getUserByEmail = async (email) => {
    return User.findOne({ where: { email } });
}

const createUser = async (data) => {

    const newUser = await User.create({
        email:      data.email,
        password:   data.password,
        role:       data.role,
    });

    if (newUser.role == 1) {
        await JobSeeker.create({
            id: newUser.id
        });
    } else if (newUser.role == 2) {
        await Employer.create({
            id: newUser.id
        });
    }

    return newUser;
}

const updateUser = async (userId, newData) => {
    const user = await User.findByPk(userId);
    if (!user) {
        throw new Error('User not found');
    }
    return user.update(newData);
}


const deleteUser = async (id) => {
    const user = await User.findByPk(id);
    if (!user) {
        throw new Error('User not found');
    }
    return user.destroy();
}

export default {
    getUserById,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
};
