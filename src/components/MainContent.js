import Headlines from './Headlines'
import ContactLinks from "./ContactLinks"

const MainContent = () => {
    return (
        <main className="main-content">
            <Headlines />
            <ContactLinks />
            <div className="about-section">
                <h3 className="about-section__heading">About</h3>
                <p className="about-section__text">
                    A frontend developer with an appetite for building tools and utilities as well as other experiences
                    to aid end users in their everyday lives. I occasionally take experimental approaches in terms of 
                    design and functionality to further discover and explore new opportunities in both areas.
                </p>
            </div>
            <div className="interests-section">
                <h3 className="interests-section__heading">Interests</h3>
                <p className="interests-section__text">
                    Food lover. Music disciple. Sport enthusiast. Avid reader. Fitness nerd. Internet fanatic. 
                    Video game geek. Anime ninja. Adventure sniffer. Coffee consumer.
                </p>
            </div>
        </main>
    )
}

export default MainContent 