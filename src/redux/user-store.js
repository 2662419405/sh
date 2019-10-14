const defaultValue = {
    redirectTo:'',
    msg: '',
    isLogin: false,
    user: '',
    pwd: '',
    type: ''
}

export default ( state = defaultValue, actions )=>{
    switch (actions.type) {
        case 'addUser':
            return {...state,...actions.value}
        case 'login':
            return {...state,...actions.value}
        case 'cookie':
            return {...state,...actions.value}
        case 'update_success':
            return {...state,...actions.value}
        default:
            return state;
    }
}