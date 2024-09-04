import React from 'react';
import styles from '../styles/Page2.module.css';
import heroImage from '../assets/jakub-zerdzicki-Ebj87ehFNNU-unsplash.jpg';

const Page2 = () => {
    const heroSectionStyle = {
        backgroundImage: `url(${heroImage})`,
        height: '400px',
        paddingBottom: '50px'
    };

    return (
        <div className={styles.pageContainer}>
            <section className={styles.heroSection} style={heroSectionStyle}>
                <div className={styles.heroContent}>
                    <h1>Buying a Home as a Non-U.S. Citizen</h1>
                    <p>Learn about mortgage options and find the best rates.</p>
                </div>
            </section>
            <div className={styles.contentContainer}>
    <h2>Securing a Mortgage as a Non-U.S. Citizen</h2>
    <p>If you plan to purchase a home in cash, the process is straightforward. However, if you need a mortgage, things get more complex. Your eligibility for a mortgage largely depends on your residency status:</p>
    <ul>
        <li><strong>Permanent Residents:</strong> If you have a green card, you can generally qualify for a mortgage. Lenders will verify your legal residency status.</li>
        <li><strong>Non-Permanent Residents:</strong> With a valid work visa, you may also qualify for a mortgage, but again, your residency status will need to be confirmed.</li>
        <li><strong>Foreign Nationals:</strong> If you’re not planning to move to the U.S., you might only qualify for a foreign national loan, which typically requires a higher down payment, comes with higher interest rates, and requires an Individual Taxpayer Identification Number (ITIN).</li>
    </ul>
    <p>Non-citizens might face challenges due to a lack of U.S. credit history, making it difficult for lenders to assess creditworthiness. This might result in a higher interest rate or difficulties in finding a lender willing to work with you. Consider improving your credit score before applying for a mortgage.</p>

    <h2>FHA Loans and Non-U.S. Citizens</h2>
    <p>Non-U.S. citizens can apply for FHA loans if they can prove permanent residency, but the home must be intended as a primary residence, not a vacation home.</p>

    <h2>Selling U.S. Property as a Non-U.S. Citizen</h2>
    <p>If you decide to sell your U.S. property in the future, be aware of the tax implications. The IRS requires buyers of property from non-U.S. citizens to withhold 15% of the gross sale price to ensure foreign nationals pay U.S. income tax on the sale. Failure to do so can result in the buyer being liable for additional taxes. The details are outlined in the IRS FIRPTA (Foreign Investment in Real Property Tax Act) publication.</p>

    <h2>Working with a Real Estate Agent</h2>
    <p>When buying or selling property in the U.S. as a non-citizen, it's crucial to work with a trustworthy real estate agent who understands your unique situation. A good agent will guide you through the process without pressuring you into decisions that don't align with your comfort level or goals.</p>
</div>
</div>
    );

};

export default Page2;
