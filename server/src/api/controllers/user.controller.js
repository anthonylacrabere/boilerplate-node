import { registerNewUser, getUsers } from '../models/user.model.js';

export const register = async (req, res) => {
    try {
        const user = await registerNewUser();

        return res.status(200).json({
            success: true,
            message: 'User created successfully',
            user
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        });
    }
};

export const httpGetAllUsers = async (req, res) => {
    try {
        const users = await getUsers();

        if (!users) {
            return res.status(404).json({
                success: false,
                message: 'Users not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Users found successfully',
            users
        });
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: error.message
        });
    }
};
