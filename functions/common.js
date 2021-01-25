import Cookies from 'universal-cookie'

const getGender = (currentPage) => {
    
    const cookies       = new Cookies();
    const cookie_gender = cookies.get('gender')
    const current_page  = currentPage

    let gender = cookie_gender == null || cookie_gender == '' ? 'female': cookie_gender
    
    if(current_page == 'index') {
        cookies.remove('gender')
        return null  
    } 

    const valid_gender = ['male', 'female']        
    if(valid_gender.includes(current_page)) {
        cookies.set('gender', current_page)
        gender = current_page
    }

    return gender

}

export {
    getGender
}