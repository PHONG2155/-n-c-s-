import Navbar from '../components/Layouts/Navbar';
import MainBanner from '../components/HomeOne/MainBanner';
import About from '../components/HomeOne/About';
import Webinar from '../components/HomeOne/Webinar';
import PartnerContent from '../components/Common/PartnerContent';
import FeedbackSlider from '../components/Common/FeedbackSlider';
import PricingCard from '../components/Common/PricingCard';
import BlogPost from '../components/Common/BlogPost';
import FreeTrialForm from '../components/Common/FreeTrialForm';
import Footer from '../components/Layouts/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <MainBanner />

      <About />

    

      <Webinar />

     

      <FeedbackSlider />


      <BlogPost />
      
      <FreeTrialForm />

      <Footer />
    </>
  );
}
