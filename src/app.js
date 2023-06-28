const { GetData } = require('./getdata');
const { Login } = require('./login');
const { GetEntriesGym } = require('./entries');
const App = () => {
    new Promise((resolve, reject) => {

        resolve(GetData())
    })
        .then((data) => {
            return (
                Login(data.login, data.pass)
            );

        })
        .then((cookie) => {
            return new Promise((resolve, reject) => {
                console.log(cookie)
                if (cookie != 0) {
                    GetEntriesGym(cookie);
                    resolve(1)

                }
                else {
                    console.log("nie udalo sie zalogowac");
                    resolve(0)

                }
            })
        })
        .then((res) => {
            if (res != 0) {
                console.log('zapisano');
            }

        })
}
App();




