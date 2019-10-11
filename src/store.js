const defaultData = {
    result: [],
    name: 'sh'
};

export default ( state=defaultData, action )=>{
    switch(action.type){
        case 'start':
            return {...state,name:action.value}
        case "getValue":
            return {...state,result:action.value}
        default:
            return state;
    }
}