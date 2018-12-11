const Admin = require('../db/models/Admin');
const User = require('../db/models/User');
const constants = require('../constants/constants');


module.exports = {
	admin: (req, res) => {
        User.findAll().then(all => {
            res.render('adminPage', {
                admin: 'admin',
                allUsers: all
            });
        });
    },
    reg: (req, res) => {
        User.create({
            user_name: req.query.login,
            user_password: req.query.password
        })
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
		Admin.find({ 
			where: { 
				admin_name: req.query.login,
				admin_password: req.query.password
			}
		})
		.then( result => {
			if(result) {
				res.redirect(constants.ADMIN_PAGE);
			}else {
				User.find({
					where:	{
						user_name: req.query.login,
						user_password: req.query.password
					}
				})
				.then(user => {
					res.render('userPage', {
						user_name: user.user_name,
						user_task: user.user_task
					});
				})
				.catch( err => {
					res.redirect(constants.HOME_PAGE);
				});
			}
		});
	},
    save: (req, res) => {
        User.find({ where: {
                user_name: req.query.user
            } })
            .then(user => {
                user.update({ user_task: req.query.newTask })
                    .then(() => res.redirect(constants.ADMIN_PAGE));
            })
            .catch(err => {
                res.send('waaaaaaat?????//');
            });
    },
	delete: (req, res) => {
		User.destroy({ where: {user_name: req.query.user } })
		.then( () => 	res.redirect(constants.ADMIN_PAGE));
	}
};