import Headlines from './Headlines'
import ContactLinks from "./ContactLinks"

const MainContent = () => {
    return (
        <main className="main-content">
            <Headlines />
            <ContactLinks />
            <div className="about-section">
                <h3 className="about-section__heading">Title/Heading</h3>
                <p className="about-section__text">Section text</p>
            </div>
            <div className="interests-section">
                <h3 className="interests-section__heading">Title/Heading</h3>
                <p className="interests-section__text">Section text</p>
            </div>
        </main>
    )
}

export default MainContent 