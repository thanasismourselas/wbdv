export default function FetchData(endpoint, method = 'GET', data = null, useCache = false) {
    const URLapi = window.Configs.APIURL

    var cacheData = sessionStorage.getItem(endpoint + (data == null ? '' : data))
    var cachingEnabled = localStorage.getItem("Caching") == 'true' ? true : false
    //console.log(endpoint)
    //console.log(useCache)
    //console.log(cachingEnabled)
    if (cacheData != null && useCache && cachingEnabled) {
        return new Promise((resolve) => { resolve(JSON.parse(cacheData)) });
    }
    else {
        return new Promise((resolve, reject) => {
            switch (method.toUpperCase()) {
                case 'GET':
                    fetch(URLapi + endpoint, {
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            'Bearer': localStorage.getItem('authToken'),
                            'TAVersion': 'Web'
                        },
                    })
                        .then(res => res.json())
                        .then(apiObj => {
                            if (apiObj.status === 1) {
                                if (apiObj.messages.includes('TOKEN_EXPIRATION_EXCEPTION') || apiObj.messages.includes('TOKEN_UNAUTHORIZED_EXCEPTION')) {
                                    fetch(URLapi + '/api/wru/RfTk', {
                                        headers: {
                                            'Content-Type': 'application/json',
                                            Accept: 'application/json',
                                            'Bearer': localStorage.getItem('authToken'),
                                            'TAVersion': 'Web'
                                        }
                                    })
                                        .then(res => res.json())
                                        .then(apiObj => {
                                            if (apiObj.status === 1) {
                                                reject(apiObj.messages); //redirect to login screen
                                            }
                                            localStorage.setItem('authToken', apiObj.data);
                                            FetchData(endpoint, method, data)
                                                .then(data => {
                                                    resolve(data);
                                                })
                                                .catch(error => {
                                                    reject(error);
                                                })
                                        })
                                } else {
                                    reject(apiObj);
                                }
                            } else {
                                if (useCache && cachingEnabled) {
                                    try {
                                        sessionStorage.setItem(endpoint + (data == null ? '' : data), JSON.stringify(apiObj));
                                    } catch (e) {
                                        sessionStorage.clear()
                                    }

                                }
                                resolve(apiObj);
                            }
                        })
                    break;
                default:
                    fetch(URLapi + endpoint, {
                        method: method.toUpperCase(),
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: 'application/json',
                            'Bearer': localStorage.getItem('authToken'),
                            'TAVersion': 'Web'
                        },
                        body: JSON.stringify(data)
                    })
                        .then(res => res.json())
                        .then(apiObj => {
                            if (apiObj.status === 1) {
                                if (apiObj.messages.includes('TOKEN_EXPIRATION_EXCEPTION') || apiObj.messages.includes('TOKEN_UNAUTHORIZED_EXCEPTION')) {
                                    fetch(URLapi + '/api/wru/RfTk', {
                                        headers: {
                                            'Content-Type': 'application/json',
                                            Accept: 'application/json',
                                            'Bearer': localStorage.getItem('authToken'),
                                            'TAVersion': 'Web'
                                        }
                                    })
                                        .then(res => res.json())
                                        .then(apiObj => {
                                            if (apiObj.status === 1) {
                                                reject(apiObj.messages); //redirect to login screen
                                            }
                                            localStorage.setItem('authToken', apiObj.data);
                                            FetchData(endpoint, method, data)
                                                .then(data => {
                                                    resolve(data);
                                                })
                                                .catch(error => {
                                                    reject(error);
                                                })
                                        })
                                } else {
                                    reject(apiObj);
                                }
                            } else {
                                if (useCache && cachingEnabled) {
                                    try {
                                        sessionStorage.setItem(endpoint + (data == null ? '' : data), JSON.stringify(apiObj));
                                    } catch (e) {
                                        sessionStorage.clear()
                                    }
                                }
                                resolve(apiObj);
                            }
                        })
            }
        });
    }
};