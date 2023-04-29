export const goToLoginPage = (navigator)=>{
    navigator("/login")
}

export const goToSignupPage = (navigator)=>{
    navigator("/signup")
}

export const goToHomePage = (navigator)=>{
    navigator("/")
}

export const goToCommentsPage = (navigator, id)=>{
    navigator(`/posts/${id}`)
}