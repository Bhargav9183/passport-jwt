const registerModel = require('../model/registerModel');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {

    try {
        const { name, email, password } = req.body;
        console.log(req.body)
        const registeruser = await registerModel.create({ name, email, password });
        if (registeruser) {
            return res.status(200).json({ success: true, data: registeruser })
        } else {
            return res.status(500).json({ msg: 'user not insert' });
        }
    } catch (error) {
        return res.status(500).json({ msg: 'user insert in error' })
    }
}

const Login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const data = await registerModel.findOne({ email: email });
        if (data) {
            if (password == data.password) {
                let token = await jwt.sign({ token: data }, "yryertrweryuewasffgjklhffeuyuiouytrewrtykheraesdfgherdhklfs", { expiresIn: 60 * 100 * 1000, });
                res.cookie("adminC", token);
                return res.json({ status: 200, msg: "admin login", token });
            } else {
                return res.json({ status: 400, msg: "no token" });
            }
        } else {
            return res.status(500).json({ msg: 'somthing went wrong' })
        }
    } catch (error) {
        return res.status(500).json({ msg: 'somthing went wrong' })

    }

}

const checkjwt = (req, res) => {

    res.send('jwt is working')
}

module.exports = { register, Login, checkjwt }