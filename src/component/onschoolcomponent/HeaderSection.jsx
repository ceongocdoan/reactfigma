import React from 'react';
import Header2 from '../Header/Header2';
import HeroSection from './HeroSection';
import Partner from '../UniversityPartners/UniversityPartners';
import HeroSection1 from '../HeroSection1/HeroSection1';
import ContentImage from '../HeroSection1/ContentImage';
import BackgroundImage from '../HeroSection1/BackgroundImage';
import FMGEMethod from '../FMGEMethod/FMGEMethod';
import LearningByDoing from '../LearningByDoing/LearningByDoing';
import ProjectBasedLearning from '../ProjectBasedLearning/ProjectBasedLearning';
import GuidedSelfPractice from '../GuidedSelfPractice/GuidedSelfPractice';
import ExpertTeam from '../ExpertTeam/ExpertTeam';
import CourseSection from '../CourseSection/CourseSection';
import Testimonials from '../TestimonialCard/TestimonialsPage';
import Footer from '../Footer/Footer';
import TestimonialSection from '../TestimonialCard/TestimonialSection';

const HeaderSection = () => {
  return (
    <div className="flex flex-col bg-white-50">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
        <Header2 />
      </div>

      {/* Add padding to avoid overlapping */}
      <div className="pt-[70px]">
        {/* Hero Section with Background Image */}
        <div className="relative flex flex-col justify-center items-center w-full pb-12 min-h-[960px]">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dce7d6a56622d0da40a6a09da0d2ee169c9b23ef7a34b3ddc9891e284885e81?placeholderIfAbsent=true&apiKey=057aab5311cf46f4b038f586fb84e77f"
            alt="Background"
            className="absolute inset-0 object-cover h-full w-full z-0"
          />
          <HeroSection />
        </div>

        {/* Partner Section */}
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <Partner />
        </div>

        
        
        
      {/* <Partner /> */}
      
      {/* <ImageGallery/> */}
   <HeroSection1/>
      <FMGEMethod/>
      <div className='mt-[70px] space-y-12 '>
        <LearningByDoing/>
        <ProjectBasedLearning/>
      </div>
      <GuidedSelfPractice/>
      <ExpertTeam/>
      <CourseSection/>
      
      

      <TestimonialSection/>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    // </div>
  );
};

export default HeaderSection;
