import React, { useState } from "react";
import MortgageCalculator from "../components/MortgageCalculator";
import HomeHero from "../components/HomeHero";
import style from '../styles/home.module.css'
// import CharlotteHome from "../components/CharlotteHome";
import AccordionSteps from "../components/AccordionSteps";
import CarouselComponent from "../components/CarouselComponent";
import Art from '../assets/charlotte-art.jpg';



const Home = () => {    
    const data = [
        {
            id: 0,
            label: "Step 1: Assess Your Budget",
            renderContent: () => (
                <div>
                    <p>At Budget Nest, we help you start your home-buying journey by assessing your financial situation. Use our budget calculator and explore our resources on loans and mortgages to determine the perfect price range for your dream home.</p>
                </div>
            ),
        },
        {
            id: 1,
            label: "Step 2: Get Pre-Approved",
            renderContent: () => (
                <div>
                    <p>Getting pre-approved is a crucial step in buying a home. Budget Nest connects you with trusted lenders to secure a pre-approval, showing sellers you’re serious and helping you understand your borrowing potential.</p>
                </div>
            ),
        },
        {
            id: 2,
            label: "Step 3: Find Your Home",
            renderContent: () => (
                <div>
                    <p>With Budget Nest, finding your dream home is simple. Use our powerful search tools to explore listings that meet your needs, complete with virtual tours, detailed photos, and expert tips to guide your search.</p>
                </div>
            ),
        },
        {
            id: 3,
            label: "Step 4: Make an Offer",
            renderContent: () => (
                <div>
                    <p>Ready to make an offer? Budget Nest offers expert guidance on crafting a competitive offer and negotiating the best terms. With our support, you’ll feel confident every step of the way.</p>
                </div>
            ),
        },
        {
            id: 4,
            label: "Step 5: Close on Your Home",
            renderContent: () => (
                <div>
                    <p>Budget Nest makes closing on your new home straightforward and stress-free. From securing your mortgage to completing inspections and finalizing paperwork, we’ll guide you through every step until the keys are in your hand.</p>
                </div>
            ),
        }

    ]
    return (
        <div>
            <HomeHero />
            {/* <CharlotteHome /> */}
            <div className={ style.splitText }>
                <div className={ style.charlotteText }>
                    <img src={Art} className= {style.art}alt="charlotte art" />
                    <h2>Welcome to Charlotte</h2>
                    <p>
                        Charlotte is famous for its great food, friendly vibe, golf courses, and sports scene. As the financial hub of the South, it has over 3,000 manufacturing companies. Residents enjoy top amenities, outdoor activities, and easy travel across the U.S., making it the 6th best place to live according to U.S. News.
                    </p>
                    <p>
                        Budget Nest offers affordable, well-located communities in Charlotte with upgraded homes and a structural warranty. Find your dream home today!
                    </p>
                </div>
                <div className={ style.charlotteTextList }>
                <h2>Amenities Around Every Corner</h2>
                <ul>
                    <li>Top-Ranked Place to Live: Named the #2 'Best Place to Live in North Carolina in 2021-2022' by U.S. News.</li>
                    <li>2nd-Largest Financial Hub: Charlotte is the second-largest financial center in the United States, after New York City.</li>
                    <li>Business Opportunities: Ranked #3 among 'The Top 25 Cities for Starting a Business in 2022' by Policygenius.</li>
                    <li>Outdoor Recreation: Enjoy Lake Norman for boating and fishing, or visit the U.S. National Whitewater Center for rafting and zip-lining.</li>
                    <li>NASCAR Hall of Fame: Located downtown, celebrating the rich history of NASCAR.</li>
                    <li>Diverse Attractions: From the interactive Discovery Place Science museum to the exciting Charlotte Motor Speedway.</li>
                </ul>
                </div>
            </div>

            <div className={ style.splitHomeMortgage }>
                <AccordionSteps data={data} />
                <MortgageCalculator />
            </div>

            <CarouselComponent /> 
        </div>
    )
}

export default Home;
