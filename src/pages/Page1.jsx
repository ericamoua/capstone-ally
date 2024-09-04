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
        <p className={styles.definitionSection}>
          <strong>What does it mean when a house is ‘active under contract’?</strong>
          When a home is labeled as "active under contract," it indicates that the seller has accepted an offer from a buyer, but the sale has not yet been finalized. Once all the required steps are completed, the status will change to show that the home has been sold.
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
      </div>
    </div>
  );
};

export default Page1;
