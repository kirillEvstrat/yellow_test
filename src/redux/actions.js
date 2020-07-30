import {
    AUTH,
    GET_JOG,
    UPDATE_JOG,
    ADD_JOG,
    OPEN_ADD_MODAL,
    CLOSE_ADD_MODAL,
    FILTER_JOGS,
    OPEN_UPDATE_MODAL
} from "./types";

// export function createPost(post) {
//     return{
//         type: CREATE_POST,
//         payload: post
//     }
//
// }

export function auth() {
    return async dispatch => {
        try{
            const response = await fetch('https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: 'uuid=hello'
                }
            );
            const json = await response.json();
            console.log(json);
            dispatch({type: AUTH , payload: json.response["access_token"]});
            localStorage.setItem('accessToken', json.response["access_token"]);
            dispatch(getJogsByUser(json.response["access_token"]));
        }
        catch (e) {
            console.dir(e);
        }
    }
}

export function autWithLocalStorage(token) {
    return async dispatch => {
        try{
            dispatch({type: AUTH , payload: token});
            dispatch(getJogsByUser(token));
        }
        catch (e) {
            console.dir(e);
        }
    }
}

export function getJogsByUser(token) {
    return async dispatch => {
        try{
            console.log(token);
            const response = await fetch('https://jogtracker.herokuapp.com/api/v1/data/sync',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization' : "Bearer " +token,
                    },
                }
            );
            const json = await response.json();
            console.log(json);
            dispatch({type: GET_JOG , payload: json.response.jogs});
        }
        catch (e) {
            console.dir(e);
        }
    }
}

export function addJog(token, data) {
    return async dispatch => {
        try{
            // const form_data = new FormData();
            //
            let formData = "";
            for ( let key in data ) {
                formData += key + "=" + data[key]+ "&" ;
            }
            formData = formData.slice(0, formData.length-1);

            console.log(formData);

            const response = await fetch('https://jogtracker.herokuapp.com/api/v1/data/jog',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization' : "Bearer " +token,

                    },
                    body: formData,

                }
            );
            const json = await response.json();
            console.log(json);
            dispatch({type: ADD_JOG , payload: json.response});
            dispatch(closeAddModal());
        }
        catch (e) {
            console.dir(e);
        }
    }
}

export function updateJog(token, data) {
    return async dispatch => {
        try{
            // const form_data = new FormData();
            //
            let formData = "";
            for ( let key in data ) {
                formData += key + "=" + data[key]+ "&" ;
            }
            formData = formData.slice(0, formData.length-1);

            console.log(formData);

            const response = await fetch('https://jogtracker.herokuapp.com/api/v1/data/jog',
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'Authorization' : "Bearer " +token,

                    },
                    body: formData,

                }
            );
            const json = await response.json();
            console.log(json);
            dispatch({type: UPDATE_JOG , payload: json.response});
            dispatch(closeAddModal());
        }
        catch (e) {
            console.dir(e);
        }
    }
}

export function filterJogs(data) {
    return  {
        type: FILTER_JOGS,
        payload: data,
    };
}

export function openAddModal() {
    return {
        type: OPEN_ADD_MODAL
    }
}

export function openUpdateModal(id) {
    return {
        type: OPEN_UPDATE_MODAL,
        payload: id
    }
}

export function closeAddModal() {
    return {
        type: CLOSE_ADD_MODAL
    }
}