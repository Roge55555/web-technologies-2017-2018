const Admin = require('../db/models/Admin');
const User = require('../db/models/User');
const constants = require('../constants/constants');


module.exports = {
    admin: (req, res) => {
        User.find().exec().then(all => {
            res.render('adminPage', {
                admin: 'admin',
                allUsers: all
            });
        });
    },
    reg: (req, res) => {
        const user = new User({
            name: req.query.login,
            password: req.query.password
        });
        user.save()
            .then(user => {
                res.redirect(constants.HOME_PAGE);
            })
            .catch(err => {
                res.send(err.errors[0].message);
            });
    },
    login: (req, res) => {
        res.render('login');
    },
    auth: (req, res) => {
        Admin.findOne({
            name: req.query.login,
            password: req.query.password
        })
            .exec()
            .then( result => {
                if(result) {
                    res.redirect(constants.ADMIN_PAGE);
                }else {
                    User.findOne({
                        name: req.query.login,
                        password: req.query.password
                    })
                        .exec()
                        .then(user => {
                            res.render('userPage', {
                                user_name: user.name,
                                user_task: user.task
                            });
                        })
                        .catch( err => {
                            res.redirect(constants.HOME_PAGE);
                        });
                }
            });
    },
    save: (req, res) => {
        User.findOneAndUpdate({ name: req.query.user }, { $set: { task: req.query.newTask } })
            .exec()
            .then(() => res.redirect(constants.ADMIN_PAGE))
            .catch(err => {
                res.send('waaaaaaat?????//');
            });
    },
    delete: (req, res) => {
        User.deleteOne({ name: req.query.user })
            .then( () => 	res.redirect(constants.ADMIN_PAGE));
    }
};