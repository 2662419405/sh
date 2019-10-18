
export function getDirectPath({type,avatar}){
    //根据用户信息进行跳转
    let url = ( type==='boss' )? 'boss':'genius'
    if(!avatar){
        url += 'info'
    }
    return url;
}

export function getChatId(userId,targetID){
    return [userId,targetID].sort().join('_')
}