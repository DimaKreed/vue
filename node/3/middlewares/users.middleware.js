const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = {
    checkUserValidity: (req, res, next) => {
        const {
            name, email, age, password
        } = req.body;
        try {
            if (!name || !password || !email || !age) throw new Error('user is not valid');
            if (name.length < 4) throw new Error('name should have at least 4 symbols');
            if (!re.test(email)) throw new Error('email is not valid');
            if (age < 1) throw new Error('age should have at least 1 year');
        } catch (e) {
            res.status(400).json(e.message);
        }
        next();
    },

    checkUserIdValidity: (req, res, next) => {
        const { id } = req.params;
        try {
            if (!id || id < 0) throw new Error('User id is not valid');
        } catch (e) {
            res.status(200).json(e.message);
        }
        next();
    }
    ,

};
