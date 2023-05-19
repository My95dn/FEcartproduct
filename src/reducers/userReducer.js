const initState = {
    users: null,
    userAll: []
}
const handleUser = (state = initState, action) => {
    let dataUser
    switch(action.type) {
            case 'data':
                dataUser = {
                    ...state ,
                    users: action.payload
                }
                break
            case 'getUserall':
                dataUser = {
                    ...state,
                    userAll: [ action.payload]
                }
                break


        default:
           return state ?? initState
    }
    return dataUser
}

export default handleUser