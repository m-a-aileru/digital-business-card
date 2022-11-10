import { MdEmail } from 'react-icons/md'
import { BsLinkedin } from 'react-icons/bs'

const ContactLinks = () => {
    return (
        <div className="contact-links">
            <a href="mailto:matthew.a.aileru@gmail.com" className="contact-links__email">
                <MdEmail />Email
            </a>
            <a href="https://www.linkedin.com/in/matthew-aileru-ba9ba094/" className="contact-links__linkedin" target="_blank">
                <BsLinkedin />LinkedIn
            </a>
        </div>
    )
}

export default ContactLinks 
