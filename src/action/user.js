export const getUserall = payload => {
    return {
        type: 'getUserall',
        payload
    }
}
export const handlEmail = payload => {
    return {
        type: 'email',
        payload
    }
}
export const handlePassword = payload => {
    return {
        type: 'password',
        payload

    }
}
export const handleresdata = payload => {
    return {
        type: 'data',
        payload

    }
}
export const handleCreatefirstName = (payload) => {
    return {
        type: 'createFirstName',
        payload

    }
}
export const handleCreatelastName = (payload) => {
    return {
        type: 'createLastName',
        payload

    }
}
export const handleCreateEmail = (payload) => {
    return {
        type: 'createEmail',
        payload

    }
}
export const handleCreatePhonenumber = (payload) => {
    return {
        type: 'createPhoneNumber',
        payload

    }
}
export const handleCreateGender = (payload) => {
    return {
        type: 'createGender',
        payload

    }
}
export const handleEditdata = (payload) => {
    return {
        type: 'getidEditdata',
        payload

    }
}// xong chạy đi đâu sẽ có action dispath nó gửi vào reducer
// handleEdit
export const handleeditFirstName = (payload) => {
    return {
        type: 'editFirstname',
        payload

    }
}
export const handleEditLastName = (payload) => {
    return {
        type: 'editLastname',
        payload

    }
}
export const handleEditEmail = (payload) => {
    return {
        type: 'editEmail',
        payload

    }
}
export const handleEditPhone = (payload) => {
    return {
        type: 'editPhone',
        payload

    }
}
export const handleEditGender = (payload) => {
    return {
        type: 'editGender',
        payload

    }
}
