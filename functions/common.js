import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'

const getCurrentPage = () => {
    const router = useRouter()
    const pathname = router.pathname

    // check index page
    if(pathname == "/") return 'index'

    // check page that defined gender path
    const checkPath = pathname.split("/")[1];
    const valid_gender = ["male", "female"]        
    if(valid_gender.includes(checkPath)) {
        return checkPath
    }

    return 'others'
}

const getGender = () => {
    
    const cookies = new Cookies();    
    const cookie_gender = cookies.get('gender')
    const current_page = getCurrentPage()

    let gender = cookie_gender == null ? 'female': cookie_gender
    
    if(current_page == 'index') cookies.remove('gender')

    const valid_gender = ['male', 'female']        
    if(valid_gender.includes(current_page)) {
        cookies.set('gender', current_page)
        gender = current_page
    }

    return gender

}

export {
    getCurrentPage,
    getGender
}