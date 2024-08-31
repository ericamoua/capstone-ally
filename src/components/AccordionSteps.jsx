import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/accordion.css';

const AccordionSteps = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1 className="text-center pt-4">Guiding You Home, Every Step of the Way</h1>
      <div id="accordion" className="py-5">
        {data.map((item, index) => (
          <div key={item.id} className="card border-0">
            <div className="card-header p-0 border-0" id={`heading-${item.id}`}>
              <button
                className={`btn btn-link accordion-title border-0 ${activeIndex === index ? '' : 'collapsed'}`}
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`collapse-${item.id}`}
              >
                <i className="fas fa-plus text-center d-flex align-items-center justify-content-center h-100"></i>
                {item.label}
              </button>
            </div>
            <div
              id={`collapse-${item.id}`}
              className={`collapse ${activeIndex === index ? 'show' : ''}`}
              aria-labelledby={`heading-${item.id}`}
              data-parent="#accordion"
            >
              <div className="card-body accordion-body">
                {item.renderContent()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccordionSteps;
