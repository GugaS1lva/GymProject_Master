import React from 'react';

import { workouts } from '../data'

import WorkoutSlider from '../components/WorkoutSlider'

const Workouts = () => {
  const { title, icon } = workouts

  return (
    <section id='workouts' className='section'>
      <div
        className='section-title-group max-w-[540px] mx-auto px-4 lg:px-0'
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img src={icon} alt="" />
        <h2 className='h2 section-title'>{title} <span className='text-primary-200'>.</span></h2>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <WorkoutSlider />
      </div>
    </section>
  );
};

export default Workouts;
