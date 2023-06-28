const Login = (login, password) => {
    return new Promise((resolve, reject) => {
        resText = "";
        formDataLogin = new FormData();
        formDataLogin.append('action', 'mda_user_login');
        formDataLogin.append('log', login);
        formDataLogin.append('pwd', password);
        formDataLogin.append('return_url', 'https://justgym.pl/klient/');

        fetch('https://justgym.pl/wp-admin/admin-ajax.php', {
            method: 'POST',
            credentials: 'include',
            body: formDataLogin,

            headers: {
                'Accept':
                    '*',
                'Accept-Encoding':
                    'gzip, deflate, br',
                'Accept-Language':
                    'pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7',
            }

        })
            .then((res) => {
                resText = res;
                return (
                    res.json()
                )
            })
            .then((res) => {
                if (res.status != 'error') {
                    console.log('udalo sie zalogowac')
                    return new Promise((resolve, reject) => {
                        resolve(resText);
                    })
                        .then((res) => {
                            return (res.headers.get('set-cookie'));
                        })

                        .then((setcookie) => {

                            const cookies = setcookie.split(';');
                            return (cookies);
                        })
                        .then((cookies) => {

                            const wordpress_logged_in = [];
                            cookies.map((cookie) => {
                                let index = cookie.indexOf('wordpress_logged_in');
                                if (index > 0) {
                                    wordpress_logged_in.push(cookie);
                                }
                            })
                            let res = wordpress_logged_in;
                            console.log(res);
                            let xd = res.at(2);
                            let xd2 = xd.split(',');
                            return (xd2);
                        })
                        .then((res) => {
                            console.log(res[1]);
                            console.clear();
                            resolve(res[1]);

                        })
                }
                else {
                    console.log('nie udalo sie zalogowac');
                    resolve(0);
                }
            })


    })
}

module.exports = { Login };

