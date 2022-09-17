import React from 'react';
import Wave from '../../elements/Wave/Wave';

const Hero = () => {
  return (
      <>
    <div className={"h-screen w-full text-4xl text-blackColor bg-backgroundColor"}>
        Hero
    </div>
        <div className={"absolute -bottom-20 w-full"}>
        <Wave />
      </div>
      </>
  )
}

export default Hero