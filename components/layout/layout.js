import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { SystemContext, SystemProvider } from '../../utils/SystemProvider';
const Layout = (props) => {

    const currentPage = props.currentPage
    const gender = props.gender
    const tdk = props.translation.tdk

    const genderSwitcher = useRef()
    const [showGenderSwicher, setGenderSwitcher] = useState(false);

    let genderSwitcherLink = `/male/hair-knowledge/`
    let genderSwitcherImage = `/images/d_male_switch_btn.png`

    if(gender == 'male') {
        genderSwitcherLink = `/female/hair-knowledge/`
        genderSwitcherImage = `/images/d_female_switch_btn.png`
    }

    const handleScroll = () => {
        let position = window.scrollY
        let width = window.innerWidth
        let top = 1200
        
        if(width > 940) {
            top = 400
        }

        if(position > top) {            
            setGenderSwitcher(true)
        } else {
            setGenderSwitcher(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <>
            <SystemProvider>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="description" content="Good Hair" />
                    {currentPage == '404' ? '' : (
                        <>
                            <title>{tdk.title} | Good Hair</title>
                            <meta name="description" content={tdk.description} />
                            <meta name="keywords" content={tdk.keywords} />
                        </>
                    )}
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
                            {currentPage == 'index' ? '' : (
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            ) }
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    {currentPage == 'index' ? '' : (
                                        <>
                                            <li className="nav-item active">
                                                <a className="nav-link" aria-current="page" href="/">主頁</a>
                                            </li>
                                            <li className="nav-item">
                                                <Link href={`/${gender}/hair-knowledge/`}>
                                                    <a className="nav-link">認識頭髮</a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href={`/${gender}/hair-knowledge/#fda-anchor`}>
                                                    <a className="nav-link">療程推介</a>
                                                </Link>
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

                {(currentPage == 'index') ? '' : (
                    showGenderSwicher ? (
                        <Link href={genderSwitcherLink}>
                            <a id="gender-switcher">
                                <img src={genderSwitcherImage} alt="Good Hair Logo" />
                            </a>
                        </Link>) : ''
                )}

                {props.children}

                <footer>
                    <div className="footer-social-media">
                        <a href="https://www.facebook.com/Good-Hair-%E7%88%86%E9%AB%AE-%E5%9C%8B%E9%9A%9B%E6%B4%BB%E9%AB%AE%E5%B0%88%E5%AE%B6-104625151566321" target="_blank"><i className="pss ps-fb"></i></a>
                    </div>
                    <div className="footer-links">
                        <Link href="/contact/"><a>關於我們</a></Link>
                        <Link href="/contact/#address"><a>門市地址</a></Link>
                        <Link href="/privacy/"><a>私隱政策</a></Link>
                        <Link href="/disclaimer/"><a>免責條款</a></Link>
                    </div>
                    <hr />
                    <div className="copyright">COPYRIGHT©PERFECT MEDICAL LIMITED 2020 All Right RESERVED.</div>
                    <div className="footer-country">
                        <div className="countrydiv"><img src="/images/Group_10393.png" alt="hk"/><span>香港</span></div>
                        <div className="countrydiv"><img src="/images/Group_10394.png" alt="au"/><span>澳洲</span></div>
                        <div className="countrydiv"><img src="/images/Group_10396.png" alt="macau"/><span>澳門</span></div>
                    </div>
                </footer>
                <script src="/js/bootstrap.bundle.min.js"></script>
            </SystemProvider>
        </>
    )
}

export default Layout