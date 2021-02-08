export async function submitForm(data) {
    const formData = Object.keys(data).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`).join("&");
    return fetch(window.location.origin + '/landing/form_submit.php', {
        method: 'post',
        body: formData,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(function (response) {
        if (response.status < 400) {
            return Promise.resolve();
        } else {
            return Promise.reject();
        }
    })
}

export const getShopList = async () => {
    return fetch(window.location.origin + '/shop_list.php')
        .then(response => {
            return response.json();
        })
        .then(myJson => {
            console.log(myJson);
            return myJson;
        })
}