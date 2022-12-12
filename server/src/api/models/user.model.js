import User from '../schemas/user.schema.js';

export const registerNewUser = async (user) => {
    console.log('registering...');
    return await User.create(user);
};

export const getUserBy = async (filterOptions) => {
    return await User.findOne(filterOptions, {
        __v: 0
    });
};

export const getUsers = async () => {
    return await User.find(
        {},
        {
            __v: 0
        }
    );
};
