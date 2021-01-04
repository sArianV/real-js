
const Bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// Añadimos dotenv para utilizar las variables de entorno
const dotenv = require('dotenv');

const User = require('../../models/user');

dotenv.config();
module.exports = async ({body}, res) => {
    const { password, passwordConfirmation, email, username } = body;
    
    if (password === passwordConfirmation) {
        // Creamos una instancia para guardar el usuario
        const newUser = User({
          // Encriptamos el password, y ese password lo pasamos a la base de datos
          password: Bcrypt.hashSync(password, 10),
          email,
          username,
        });
        try {
            const savedUser = await newUser.save();
            const token = jwt.sign(
                { email, id: savedUser.id, username },
                process.env.API_KEY,
                { expiresIn: process.env.TOKEN_EXPIRES_IN },
            );
            return res.status(201).json({ token });
        } catch (error) {
            console.log(error)
        }
    }

    return res.status(400).json({
        status: 400,
        message: '¡Las contraseñas no coinciden, intenta nuevamente!',
    });

};