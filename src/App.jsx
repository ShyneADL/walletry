import React from 'react'
import { FinalSect, Footer, Header, Hero, Info, Onboarding, Solutions, Why } from './components';

const App = () => {
  return (
    <div className='h-[100vh]'>
      <Header />
      <Hero />
      <Info />
      <Onboarding />
      <Solutions />
      <Why />
      <FinalSect />
      <Footer />

      {/*
      Code to implement smooth transitions of background colours 
      const featureSectionRef = useRef(null);

  useEffect(() => {
    const featureSection = featureSectionRef.current;
    const featuresItems = featureSection.querySelectorAll('.class_item');

    if (featuresItems.length > 0) {
      const firstColor = featuresItems[0].dataset.bg;
      featureSection.style.backgroundColor = firstColor;

      const colors = Array.from(featuresItems).map((item) => item.dataset.bg);

      gsap.timeline({
        scrollTrigger: {
          trigger: featureSection, // Use the ref directly
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          onUpdate: (self) => {
            let index = Math.floor(self.progress * (colors.length - 1));
            let nextIndex = Math.ceil(self.progress * (colors.length - 1));
            let blend = self.progress * (colors.length + 1) - index;
            gsap.to(featureSection, {
              backgroundColor: gsap.utils.interpolate(colors[index], colors[nextIndex], blend),
              duration: 1,
            });
          },
        },
      });
    }
  }, []); */}
    </div>
  )
}

export default App;
