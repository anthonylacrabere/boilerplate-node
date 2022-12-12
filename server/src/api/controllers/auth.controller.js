import { getUserBy } from '../models/user.model.js';
import { compare } from 'bcrypt';

export const register = () => {
    // const { email, password } = req.body
    // // const isUserAlreadyExist = await getUserBy({ email })
    // // if(isUserAlreadyExist) {
    // //     return res.status(404).json({
    // //         success: false,
    // //         message: "User already exist"
    // //     })
    // // }
    // try {
    //     const user = await registerNewUser({
    //         email,
    //         password: password,
    //         // password: hash(password, 10)
    //     })
    //     return res.status(200).json({
    //         success: true,
    //         message: 'User created successfully',
    //         user: {
    //             id: user.id,
    //             email: user.email,
    //             password: user.password,
    //         },
    //     })
    // } catch (error) {
    //     console.error(error)
    //     return res.status(404).json({
    //         success: false,
    //         message: error.message,
    //     })
    // }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUserBy({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Could not find the user'
            });
        }

        if (!compare(password, user.password)) {
            return res.status(401).json({
                success: false,
                message: 'Wrong password'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Logged in successfully',
            token: '' // TODO
        });
    } catch (error) {
        console.error(error);

        return res.status(401).json({
            success: false,
            message: 'Could not find the user'
        });
    }
};
