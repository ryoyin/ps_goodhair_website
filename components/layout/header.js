import Head from 'next/head'
import Link from 'next/link'
import { getCurrentPage, getGender } from '@/functions/common'

const Header = () => {

    const current_page = getCurrentPage()
    const gender = getGender()

    return (
        <>
            <Head> 
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Good Hair" />
                <title>Good Hair</title>        
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"></link>
            </Head>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <div className="container-fluid">
                        <Link href='/'>
                            <a className="navbar-brand">
                                <img src="/images/goodhair_logo.png" alt="Good Hair Logo" />
                            </a>
                        </Link>                    
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            {current_page == 'index' ? (<></>) : ( 
                                <>                     
                                    <li className="nav-item active">
                                        <a className="nav-link" aria-current="page" href="/">主頁</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link prefetch as={`/${gender}/hair-knowledge`} href={`/${gender}/hair-knowledge`}>
                                            <a className="nav-link">認識頭髮</a>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">療程推介</a>
                                        {/* <ul className="nav-item-sub">
                                            <li className="arrow-up"><i className="fas fa-angle-up"></i></li>
                                            <li><a href="#">123</a></li>
                                            <li><a href="#">456</a></li>
                                        </ul> */}
                                    </li>                      
                                </>
                            )}
                            </ul> 
                            <div className="d-flex lang-bar">
                                <a href="/">繁</a>
                                {/* <a href="/">简</a>
                                <a href="/">EN</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="mobile-bg"></div>
                </nav>
            </header> 

            <Link href='/'>
                <a id="gender-switcher">
                    <img src="/images/d_man_switch_btn.png" alt="Good Hair Logo" />
                </a>
            </Link>   
        </>
    )
}

export default Header