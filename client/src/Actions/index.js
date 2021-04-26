export const GET_DOGS = 'GET_DOGS'; 
export const GET_DOG_DETAIL = 'GET_DOG_DETAIL'; 
export const ADD_DOG = 'ADD_DOG'
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';

 

export function getDogs() {
    return function (dispatch) {
        return fetch("http://localhost:3001/dogs")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_DOGS, payload: json});
            });
    };
}

 export function getDogDetail(id, name) {
    return function (dispatch) {
        if(id)
        return fetch(`http://localhost:3001/dogs/${id}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_DOG_DETAIL, payload: json });
            });
        else {
            return fetch(`http://localhost:3001/dogs?name=${name}`)
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_DOG_DETAIL, payload: json });
            });
        }
    };
}
export function getTemperaments() {
    return function (dispatch) {
        return fetch("http://localhost:3001/temperaments")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: GET_TEMPERAMENTS, payload: json});
            });
    };
}


export function addDog(payload) {
    return { 
        type: 'AddDog', 
        payload: {
            ...payload,
        }
    }
} 


