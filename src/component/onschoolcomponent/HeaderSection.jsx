import React, {useEffect, useState} from 'react';
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

import Testimonials from '../TestimonialCard/TestimonialsPage';
import Footer from '../Footer/Footer';
import TestimonialSection from '../TestimonialCard/TestimonialSection';
import Pagination from '../UniversityPartners/Pagination';
// mobileop



import OnschoolLandingPage from '../../mobileop/Header/OnschoolLandingPage';
import UniversityPartnersMobile from '../../mobileop/UniversityPartners/UniversityPartnersMobile';
import OnschoolHero from '../../mobileop/SloganMobile/OnschoolHero';
import FMGEMethodMobile from '../../mobileop/FMGEMethodMobile/FMGEMethodMobile';
import LearningExperience from '../../mobileop/LearningExperience/LearningExperience';
import ExpertSection from '../../mobileop/Experts/ExpertSection';
import CoursePage from '../../mobileop/Courses/CoursePage';
import { Landingpagemo } from '../../mobileop/LandingMobile/Landingpagemo';
import TestMobile from '../../mobileop/TestMobile/TestMobile';
import FooterMobile from '../../mobileop/FooterMobile/FooterMobile';
import OnSchoolSection from '../SloganMobile/OnschoolHero';
import Section from '../Courses/Section';









const HeaderSection = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hidden sm:block flex flex-col">
        {/* Header */}
        <div
          className={`${
            isSticky
              ? 'fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300'
              : 'absolute top-0 left-0 w-full bg-blue-50 z-50 transition-all duration-300'
          }`}
        >
          <Header2 />
        </div>

        {/* Add padding để tránh header che nội dung */}
        <div className={`${isSticky ? 'pt-[80px]' : ''}`}>
          {/* Hero Section */}
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
          {/* <Pagination /> */}
        </div>




        {/* <Partner /> */}

        {/* <ImageGallery/> */}
        <HeroSection1 />
        {/* <OnSchoolSection /> */}
        {/* <OnschoolHero /> */}
        <FMGEMethod />
        <div className='mt-[70px] space-y-12 '>
          <LearningByDoing />
          <ProjectBasedLearning />
        </div>
        <GuidedSelfPractice />
        <ExpertTeam />
        <Section />
        
        



        <TestimonialSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>


    

    

    <div className="block sm:hidden">
      <div className="mb-9">
  <OnschoolLandingPage  />
</div>
  {/* <PartnerSection  /> */}
  <UniversityPartnersMobile  /> 
  {/* <OnschoolHero  /> */}
  <OnschoolHero  />
  <FMGEMethodMobile  />
  <LearningExperience />
  <ExpertSection />
  <CoursePage />
<Landingpagemo />
{/* <TargetCareerMobile */}
<TestMobile />
<FooterMobile />
</div>
</>
  );
};

export default HeaderSection;
