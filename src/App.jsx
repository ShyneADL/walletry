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
    </div>
  )
}

export default App;
