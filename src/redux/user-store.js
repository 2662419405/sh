
const defaultValue = {
    msg: '',
    isLogin: false,
    name: '',
    pwd: '',
    repeatpwd: '',
    type: ''
}

export default ( state = defaultValue, actions )=>{
    switch (actions.type) {
        case 'addUser':
            const { name,pwd,repeatpwd } = {...actions.value};
            let message = '';
            if(!name||!pwd||!repeatpwd){
                message = '请正确填写信息'
            }
            if(pwd!==repeatpwd){
                message = '两次密码不一致'
            }
            return {...state,...actions.value,msg:message}
        default:
            return state;
    }
}