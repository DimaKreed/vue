module.exports = {
    checkUserValidity: (req, res, next) => {
        const { nickname, password } = req.body;
        try {
            if (!nickname || !password) throw new Error('user is not valid');
        } catch (e) {
            res.status(400).json(e.message);
        }
        next();
    },

    checkUserIdValidity: (req, res, next) => {
        const { userId } = req.params;
        try {
            if (!userId || userId < 0) throw new Error('User id is not valid');
        } catch (e) {
            res.status(200).json(e.message);
        }
        next();
    }
    ,

};
