import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import { SystemContext, SystemProvider } from '../../utils/SystemProvider';
const Layout = (props) => {

    const currentPage = props.currentPage
    const gender = props.gender
    const tdk = props.translation.tdk

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
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    {currentPage == 'index' ? '' : (
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
                                                <Link prefetch as={`/${gender}/hair-knowledge`} href={`/${gender}/hair-knowledge`}>
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

                <Link href='/'>
                    <a id="gender-switcher">
                        <img src="/images/d_man_switch_btn.png" alt="Good Hair Logo" />
                    </a>
                </Link>

                {props.children}

                <footer>
                    <div className="footer-social-media">
                        <i className="pss ps-wts"></i>
                        <i className="pss ps-in"></i>
                        <i className="pss ps-fb"></i>
                        <i className="pss ps-youtube"></i>
                        <i className="pss ps-map"></i>
                    </div>
                    <div className="footer-links">
                        <Link href="/contact"><a>關於我們</a></Link>
                        <Link href="/contact"><a>門市地址</a></Link>
                        <Link href="/privacy"><a>私隱政策</a></Link>
                        <Link href="/disclaimer"><a>免責條款</a></Link>
                    </div>
                    <hr />
                    <div className="copyright">COPYRIGHT©PERFECT MEDICAL LIMITED 2020 All Right RESERVED.</div>
                </footer>
                <script src="/js/bootstrap.bundle.min.js"></script>
            </SystemProvider>
        </>
    )
}

export default Layout