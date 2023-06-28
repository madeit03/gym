const fs = require('fs');

const GetEntriesGym = (cookie) => {
    return new Promise((resolve, reject) => {


        formData = new FormData();
        formData.append('club_id', '1726')
        formData.append('date_from', '0')
        formData.append('date_to', '23.06.2023')
        formData.append('action', 'mda_get_entries')
        fetch('https://justgym.pl/wp-admin/admin-ajax.php', {
            method: 'POST',
            credentials: 'include',
            body: formData,
            headers: {
                Accept: '*/*',

                Cookie: cookie,

            }
        })
            .then((res) => {
                return (res.json())
            })
            .then((res) => {

                let entries = res.entries.body.results

                entries.map((ele) => {
                    console.log(ele);
                })
                try {
                    fs.writeFileSync('wejscia.json', JSON.stringify(entries))
                    resolve(1)
                } catch (err) {
                    console.error(err)
                    resolve(0);
                }

            })
    })

}
module.exports = { GetEntriesGym };
