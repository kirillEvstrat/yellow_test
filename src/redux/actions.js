import {AUTH, GET_JOG} from "./types";

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
            dispatch({type: AUTH , payload: json});
            //dispatch(getJogsByUser(json.response["access_token"]));
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