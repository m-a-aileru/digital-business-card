import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

const ContactLinks = () => {
    return (
        <div className="contact-links">
                {/* <button className="contact-links__email">
                    <a href="#" className="contact-links__email-link"><MdEmail />Email</a>
                </button>
                <button className="contact-links__linkedin">
                    <a href="#" className="contact-links__linkedin-link"><BsLinkedin />LinkedIn</a>
                </button> */}
                <a href="#" className="contact-links__email">
                    <MdEmail />Email
                </a>
                <a href="#" className="contact-links__linkedin">
                    <BsLinkedin />LinkedIn
                </a>
            </div>
    )
}

export default ContactLinks 