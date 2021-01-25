import Link from 'next/link'

const Footer = () => {
    return (
        <>
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
                    <Link href="/"><a>門市地址</a></Link>
                    <Link href="/privacy"><a>私隱政策</a></Link>
                    <Link href="/"><a>免責條款</a></Link>
                </div>
                <hr />
                <div className="copyright">COPYRIGHT©PERFECT MEDICAL LIMITED 2020 All Right RESERVED.</div>
            </footer>
            <script src="/js/bootstrap.bundle.min.js"></script>
        </>
    )
}

export default Footer