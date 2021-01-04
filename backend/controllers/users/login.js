const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const dotenv = require('dotenv');

// Cargamos el modelo
const User = require('../../models/user');

// Cargamos las variables de entorno
dotenv.config();

module.exports = async ({body}, res) => {
    // Pido solamente el password y el nombre de usuario
    const {password, username} = body;

    try {
        const userRecord = await User.findOne({username});

        if (userRecord) {
            if (Bcrypt.compareSync(password, userRecord.password)) {

                const token = jwt.sign({
                        email: userRecord.email,
                        id: userRecord._id,
                        username
                    },
                    process.env.API_KEY, {
                        expiresIn: process.env.TOKEN_EXPIRES_IN
                    },
                );
                return res.status(200).json({
                    token
                });
            }
        }

        return res.status(401).json({
            status: 401,
            message: '¡Tu email o contraseña son incorrectos, por favor, veríficalo!',
        });
    } catch (error) {
        return res.status(400).json({
            status: 400,
            message: error,
        });
    }
};