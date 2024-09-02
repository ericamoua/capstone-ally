import React from 'react';
import '../styles/Page1.css';
import heroImage from '../assets/brooke-cagle-WHWYBmtn3_0-unsplash.jpg';

const Page1 = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${heroImage})`,
    height: '400px', 
    paddingBottom: '50px' 
  };

  return (
    <div className="page-container">
      <section className="hero-section" style={heroSectionStyle}>
        <div className="hero-content">
          <h1>How to Buy a Home in 7 Steps</h1>
          <p>Get tips on how to find and buy your dream home!</p>
        </div>
      </section>

      <div className="steps-content">
        <p className="step">
          <strong>Check Your Credit Report</strong><br />
          Begin your homebuying process by reviewing your credit report. Your credit score is a key factor in determining the types of loans you qualify for and the interest rates you’ll receive. Generally, a credit score of 620 is the minimum required for a conventional loan, but higher scores can help you secure better rates. If your credit score is lower than expected, take steps to improve it before starting your home search.
        </p>

        <p className="step">
          <strong>Determine Your Budget</strong><br />
          After checking your credit report, determine how much you can afford. Use an online mortgage calculator to estimate your monthly payment, including principal, interest, taxes, insurance, and other potential costs. Factor in closing costs, typically 2%-5% of the purchase price. Once you have a budget in mind, start saving for a down payment, which is usually 20% of the home’s price, though some loans may require less.
        </p>

        <p className="step">
          <strong>Get Pre-Approved for a Mortgage</strong><br />
          Next, get pre-approved for a mortgage to find out how much you can borrow and to streamline the process when you’re ready to make an offer. Shop around with multiple lenders to find the best rates and terms for your situation.
        </p>

        <p className="step">
          <strong>Find a Real Estate Agent</strong><br />
          Choose a real estate agent who can guide you through the homebuying process and help you find the right home. Research agents and ask questions to ensure they are a good fit for your needs.
        </p>

        <p className="step">
          <strong>Search for Homes</strong><br />
          Start searching for homes that fit your budget and preferences. Use your wish list to narrow down options by price range, home style, location, and desired features. Attend open houses or schedule tours to get a better sense of what you like.
        </p>

        <p className="step">
          <strong>Make an Offer and Negotiate</strong><br />
          Once you find a home you love, work with your real estate agent to make an offer. Be prepared to negotiate with the seller on the price, contingencies, and other terms. Your agent will help you craft a competitive offer based on market conditions and comparable homes.
        </p>

        <p className="step">
          <strong>Inspect the Home and Close the Deal</strong><br />
          Before finalizing the purchase, hire a professional inspector to evaluate the home’s condition, including major systems like plumbing and electrical. If any issues arise, you can negotiate repairs or a lower price. Once everything is in order, proceed to closing, where you’ll sign the necessary documents, transfer funds, and receive the keys to your new home.
        </p>
      </div>
    </div>
  );
};

export default Page1;
