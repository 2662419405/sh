import axios from 'axios';

export const getClick = ()=>{
    return {
        type:'start',
        value: "1"
    }
}

export const getDefaultValue = ()=>{
    return dispatch =>{
        axios.get('/data').then(res=>{
            dispatch({
                type:'getValue',
                value: res.data
            })
        })
    }
}