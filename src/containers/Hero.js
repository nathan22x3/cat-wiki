import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${require('assets/images/hero.png').default})`,
      }}
      css={tw`flex flex-col px-9 py-8 rounded-tl-[42px] rounded-tr-[42px] mt-4 bg-cover bg-right bg-no-repeat lg:(pt-20 px-20 pb-32)`}
    >
      <img
        src={require('assets/images/logo.svg').default}
        alt='Cat Wiki logo'
        css={tw`self-start w-24 filter grayscale brightness-[15] lg:w-[280px]`}
      />
      <p
        css={tw`mt-3 mb-4 font-medium text-xs text-white max-w-[20ch] lg:(mb-12 max-w-[24ch] text-lg)`}
      >
        Get to know more about your cat breed
      </p>
      <div
        css={tw`hidden lg:(self-start flex items-center px-5 py-4 rounded-full bg-white)`}
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
      <button
        css={tw`self-start flex items-center gap-x-3 px-3 py-2 rounded-full text-xs bg-white lg:hidden`}
      >
        <span>Search</span>
        <img
          src={require('assets/images/search.svg').default}
          alt='Search'
          css={tw`w-4 h-4`}
        />
      </button>
    </section>
  );
};

export default Hero;
