import * as type from '../constants/ActionTypes'

const users = (state =[], action) =>{
switch (action.type){
    case type.ADD_USER:
        return state.concat([
            {
                name: action.name,
                id: action.id
            }
        ])
    case type.USER_LIST:
                return action.user
    default :
    return state
}
}

export default users;