import React from 'react';

import { pricing } from '../data'

import PlanList from './PlanList'

const Pricing = () => {

  const { icon, title, plans } = pricing

  return (
    <section id='pricing' className='section'>
      <div 
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos='fade-up'
        data-aos-delay='200'
        data-aos-offset='200'
      >
        <img src={icon} alt="" />

        <h2 className='h2'>{title}<span className='text-primary-200'>.</span></h2>
      </div>

      <PlanList plans={plans} />
    </section>
  );
};

export default Pricing;
