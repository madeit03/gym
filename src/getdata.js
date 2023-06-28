const { rejects } = require('assert');
const { resolve } = require('path');
const readline = require('readline');
const GetData = () => {
    return new Promise((resolve, reject) => {
        let rl = readline.createInterface(
            process.stdin, process.stdout);
        return new Promise((resolve, reject) => {
            rl.question("Podaj login:", (login) => {
                resolve(login);
            })
        })
            .then((login) => {
                new Promise((resolve, reject) => {
                    rl.question("Podaj haslo:", (pass) => {
                        resolve({
                            login,
                            pass,
                        });
                    })
                })
                    .then((data) => {
                        console.log(data.login, data.pass)
                        resolve(data);
                    })

            })
    })

}

module.exports = { GetData };