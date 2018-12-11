const { connection, Sequelize } = require('../connection/connection');


const User = connection.define('user', {
    User_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [4,10],
                msg: 'login should contain 4-9 characters'
            }
        },
        unique: {
            args: true,
            msg: 'such login already in use!'
          }
    },
    User_password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [5,15],
                msg: 'password should contain 5-15 characters'
            }
        }
    },
    User_task: {
    type: Sequelize.STRING,
        defaultValue: 'no task',
        allowNull: false
    }
}, {
    timestamps: false
});


module.exports = User;