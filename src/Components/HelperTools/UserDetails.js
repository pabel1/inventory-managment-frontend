export const storeToken=(token)=>{
    localStorage.setItem("token",token)
}
export const getToken=()=>{
    return localStorage.getItem("token")
}
export const removeToken=(token)=>{
    localStorage.removeItem(token)
}
export const storeUserDetails=(userData)=>{
    localStorage.setItem("userData",JSON.stringify(userData))
}
export const getUserData=()=>{
    return JSON.parse(localStorage.getItem("userData"))
}
export const removeUserData=(userData)=>{
    localStorage.removeItem(userData)
}

export const setEmail=(email)=>{
    return localStorage.setItem("email",JSON.stringify(email))
}
export const getEmail=()=>{
    return JSON.parse (localStorage.getItem("email"))
}
export const removeEmail=(email)=>{
    localStorage.removeItem(email)
}