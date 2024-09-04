import React from 'react';
import styles from '../styles/Page3.module.css';
import heroImage from '../assets/francesca-tosolini-XcVm8mn7NUM-unsplash.jpg';

const Page3 = () => {
    const heroSectionStyle = {
        backgroundImage: `url(${heroImage})`,
        height: '400px', 
        paddingBottom: '50px'
    };
    return (
      <div className={styles.pageContainer}>
        <section className={styles.heroSection} style={heroSectionStyle}>
          <div className={styles.heroContent}>
            <h1>How to Choose a Real Estate Agent</h1>
            <p>Find a trusted real estate agent in your area.</p>
          </div>
        </section>
  
        <div className={styles.contentSection}>
          <h2>Selecting the Right Real Estate Agent</h2>
          <p>Many homebuyers make the mistake of choosing the first real estate agent they meet. However, finding the right agent is crucial for a smooth homebuying experience. Here are 15 key questions to ask before making your decision:</p>
          <ol>
                <li><strong>Is real estate your full-time job? How many clients have you served this year?</strong> 
                    <p>It's important to work with an active agent who is fully committed and knowledgeable about current market trends and regulations.</p>
                </li>
                <li><strong>How many sales have you closed in the neighborhoods I’m interested in?</strong> 
                    <p>Local expertise is essential. Look for an agent with a track record of recent deals in your target areas.</p>
                </li>
                <li><strong>When clients are dissatisfied with your service, what typically goes wrong?</strong> 
                    <p>Understanding the reasons behind any past client dissatisfaction can help you determine if the agent is a good fit for you.</p>
                </li>
                <li><strong>Has anyone ever filed a complaint against you?</strong> 
                    <p>If you’re hesitant to ask directly, you can check with the state real estate licensing board for any complaints.</p>
                </li>
                <li><strong>What are your fees?</strong> 
                    <p>Have a clear discussion about the agent’s commission and any other fees. Real estate commissions are negotiable and can vary by region and firm.</p>
                </li>
                <li><strong>What services do you provide beyond negotiations and escrow?</strong> 
                    <p>Identify the services you need, such as negotiations, paperwork, and handling contingencies, and ensure the agent offers them.</p>
                </li>
                <li><strong>At what point am I committed to working with you?</strong> 
                    <p>Understand when you are contractually obligated to work with the agent. Some homebuyers unknowingly commit after a home tour.</p>
                </li>
                <li><strong>How much experience do you have with foreclosure or short-sale transactions?</strong> 
                    <p>Distressed properties can offer great deals, but they come with complex paperwork and increased liability. Even if you’re not interested in these properties, an agent with this experience is valuable.</p>
                </li>
                <li><strong>Who will be working with me throughout the process?</strong> 
                    <p>Agents often work with a team, but your primary contact should be the agent you hire. Clarify the agent’s responsibilities versus those of their team.</p>
                </li>
                <li><strong>Will you show me all available properties, including those for sale by owner?</strong> 
                    <p>A good agent will show you all relevant properties, even those that may not offer a commission, such as for-sale-by-owner listings.</p>
                </li>
                <li><strong>How quickly can you arrange home tours?</strong> 
                    <p>In a competitive market, speed is crucial. Ask about the agent’s availability and how they handle last-minute tour requests.</p>
                </li>
                <li><strong>Do you represent both buyers and sellers in the same transaction?</strong> 
                    <p>Dual agency, where an agent represents both sides, can lead to conflicts of interest. Ensure your agent is solely focused on representing you.</p>
                </li>
                <li><strong>What distinguishes you from other agents?</strong> 
                    <p>Look for expertise and confidence. You need an agent who is not only eager but also skilled and dedicated to their profession.</p>
                </li>
                <li><strong>What happens if I’m unhappy with your service?</strong> 
                    <p>Most issues arise during the closing process. Ask if the agent offers any satisfaction guarantees.</p>
                </li>
                <li><strong>Can you provide references from your last five transactions?</strong> 
                    <p>Instead of letting the agent choose their best references, ask for the most recent ones to get a balanced view of their service. Review these deals to see if the agent consistently negotiated favorable terms.</p>
                </li>
            </ol>
        </div>
        </div>
    );
};

export default Page3;
