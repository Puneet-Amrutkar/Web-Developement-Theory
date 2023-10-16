const registerUser = (req, res) => {
    const userName = req.body.name;
    const userPassword = req.body.password;
    const userEmail = req.body.email;
    res.json({
        name: userName,
        email: userEmail,
        password: userPassword,
    })
};

module.exports = registerUser;