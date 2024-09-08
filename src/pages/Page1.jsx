import React from 'react';
import styles from '../styles/Page1.module.css';
import heroImage from '../assets/brooke-cagle-WHWYBmtn3_0-unsplash.jpg';

const Page1 = () => {
  const heroSectionStyle = {
    backgroundImage: `url(${heroImage})`,
    height: '400px', 
    paddingBottom: '50px',
  };

  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection} style={heroSectionStyle}>
        <div className={styles.heroContent}>
          <h1>Definition of "Under Contract"</h1>
          <p>Understanding the meaning and implications of a property being under contract.</p>
        </div>
      </section>

      <div className={styles.definitionContent}>
        <h1 className={styles.definitionSection}>
          What does it mean when a house is ‘active under contract’? </h1>
         <p>This status indicates that a buyer has made an offer on the home, and the seller has accepted it, but the sale has not yet been finalized. Once the transaction is complete, the home’s status will change to "sold."
        <br></br>
        While the property is under contract, all contingencies must be satisfied before the sale can be finalized. These may include the buyer securing financing, completing a home inspection to ensure there are no significant defects, or fulfilling other conditions outlined in the contract. If either the buyer or seller fails to meet these conditions, the contract may be breached, allowing one party to withdraw from the sale.
        </p>

        <p className={styles.definitionSection}>
          <strong>Under contract vs. pending - what’s the difference?</strong>
          When a property is listed as pending, it means that all contingencies have been removed, all requirements have been met, and the home is on the brink of closing. Essentially, a pending property is much closer to being sold than one that is under contract.
        </p>

        <p className={styles.definitionSection}>
          <strong>Is a house under contract off the market?</strong>
          If you find your ideal property listed as under contract, it doesn’t necessarily mean all hope is lost. There’s still a possibility that the sale could fall through if either the buyer or seller fails to meet the required conditions.
        </p>

        <p className={styles.definitionSection}>
          <strong>Can a seller accept another offer while under contract?</strong>
          During the contract period, the seller may be open to accepting backup offers. A backup offer with particularly favorable terms, such as a higher price or fewer contingencies, could be appealing. Since many things can go wrong during the contract period, a significant number of homes may return to the market. Submitting a backup offer puts you in a strong position to become the next buyer if the current deal falls through.
        </p>

        <p className={styles.definitionSection}>
          <strong>What is a backup offer?</strong>
          A backup offer is an offer made by another buyer after the seller has already accepted an initial offer. Sellers may entertain backup offers if they believe the current deal could fall through. If you’re interested in a home that’s under contract, it’s wise to contact a Redfin real estate agent immediately to explore your options for submitting an offer.
        </p>
        <p className={styles.definitionSection}> The information provided in this article was sourced from Redfin.com </p>
          
      </div>
    </div>
  );
};

export default Page1;
