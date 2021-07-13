import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Footer = () => (
  <footer
    css={tw`flex flex-col justify-between items-center gap-y-4 rounded-tl-[42px] rounded-tr-[42px] px-10 py-6 bg-black text-white`}
  >
    <img
      src={require('assets/images/logo.svg').default}
      alt='Cat Wiki logo'
      css={tw`filter grayscale brightness-[15]`}
    />
    <span css={tw`text-center text-sm`}>
      created by{' '}
      <a
        href='http://github.com/nathan22x3'
        target='_blank'
        rel='noopener noreferrer'
        css={tw`underline font-bold`}
      >
        nathan22x3
      </a>{' '}
      - devChallenges.io
    </span>
  </footer>
);

export default Footer;
