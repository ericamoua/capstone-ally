import React, { useState } from "react";
import MortgageCalculator from "../components/MortgageCalculator";
import '../styles/mortgage.module.css'
import HomeHero from "../components/HomeHero";
import '../styles/home.css'
import CharlotteHome from "../components/CharlotteHome";
import AccordionSteps from "../components/AccordionSteps";
import CarouselComponent from "../components/CarouselComponent";
import HomeSteps from "../components/StepsImg";




const Home = () => {    
    const data = [
        {
            id: 0,
            label: "Step 1: Assess Your Budjet",
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

            <div>
                <HomeSteps />
                <AccordionSteps data={data} />
                <MortgageCalculator />
            </div>

            <div className="split-charlotte-home">
                <CharlotteHome />
            </div>

            <div>
                <CarouselComponent /> 
            </div>
            
        </div>
    )
}

export default Home;