import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div>Contact</div>
                <div><span>Social share</span>
                    <img src="./assets/img/footer_twitter.png" alt="" />
                    <img src="./assets/img/footer_facebook.png" alt="" />
                    <img src="./assets/img/footer_linkedin.png" alt="" />
                    <img src="./assets/img/footer_email.png" alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;