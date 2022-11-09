import React from "react";
import ContactButtons from "./ContactButtons";
import Headline from "./Headline";
import ProfileImage from "./ProfileImage";
import MainContent from "./MainContent";
import Footer from "./Footer";


export default function Card() {
    return (
        <div className="card">
            <ProfileImage />
            <Headline />
            <ContactButtons />
            <MainContent />
            <Footer />
        </div>
    )
}