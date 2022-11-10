    import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <a href="https://twitter.com/AileruMatthew" className="footer__link" target="_blank">
                <FaTwitterSquare className="footer__icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100087511156562" className="footer__link" target="_blank">
                <FaFacebookSquare className="footer__icon" />
            </a>
            <a href="https://www.instagram.com/matthew.a.aileru/" className="footer__link" target="_blank">
                <FaInstagramSquare className="footer__icon" />
            </a>
            <a href="https://github.com/m-a-aileru" className="footer__link" target="_blank">
                <FaGithubSquare className="footer__icon" />
            </a>
        </footer>
    )
}

export default Footer