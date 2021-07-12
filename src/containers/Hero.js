import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${require('assets/images/hero.png').default})`,
      }}
      css={tw`flex flex-col px-20 pt-20 pb-32 rounded-tl-[42px] rounded-tr-[42px] mt-4 bg-cover bg-right bg-no-repeat`}
    >
      <img
        src={require('assets/images/logo.svg').default}
        alt='Cat Wiki logo'
        css={tw`self-start filter w-[280px] grayscale brightness-[15]`}
      />
      <p css={tw`mt-3 mb-12 font-medium text-lg text-white max-w-[24ch]`}>
        Get to know more about your cat breed
      </p>
      <div
        css={tw`self-start flex items-center px-5 py-4 rounded-full bg-white`}
      >
        <input
          type='text'
          placeholder='Enter your breed'
          css={tw`outline-none bg-transparent`}
        />
        <img
          src={require('assets/images/search.svg').default}
          alt='Search'
          css={tw`w-4 h-4`}
        />
      </div>
    </section>
  );
};

export default Hero;
