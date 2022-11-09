import { FaTwitterSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <FaTwitterSquare className="footer__icon" />
            <FaFacebookSquare className="footer__icon" />
            <FaInstagramSquare className="footer__icon" />
            <FaGithubSquare className="footer__icon" />
        </footer>
    )
}

export default Footer