const db = require('./conn');
const bcrypt = require('bcryptjs');

class User {
    constructor(id, first_name, last_name, email, password) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword);
    }

    static async addUser(first_name, last_name, email, password) {
        try {
            const query = `INSERT INTO users (first_name, last_name, email, password) VALUES ('${first_name}', '${last_name}', '${email}', '${password}') RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }

    async login() {
        try {
            const query = `SELECT * FROM users WHERE email = '${this.email}';`;
            const response = await db.one(query);
            const isValid = this.checkPassword(response.password);

            if (!!isValid) {
                const { id, first_name, last_name } = response;
                return { isValid, user_id: id, first_name, last_name };
            } else {
                return { isValid };
            }
        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }
}

module.exports = User;