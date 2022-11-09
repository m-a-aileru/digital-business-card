import React from "react"
import ProfileImage from "./components/ProfileImage"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"


const App = () => {
    return (
        <div className="container">
            {/* <h1>Digital Business Card</h1> */}
            <ProfileImage />
            <MainContent />
            <Footer />
        </div>
        
        /**
         * - Header/Portrait/Avatar image
         * - Main content
         *      - Main heading/Name
         *      - Role
         *      - Website
         *      - Contact links
         *          - Email
         *          - LinkedIn
         *      - About section
         *          - Title/Heading
         *          - Section text
         *      - Interests section
         *          - Title/Heading
         *          - Section text
         * - Footer
         *      - Social media icons
         * */ 



        
    )
}

export default App 