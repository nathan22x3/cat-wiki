import React from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Intro = () => {
  return (
    <section
      css={tw`grid grid-cols-1 items-center gap-10 px-20 my-20 lg:grid-cols-2`}
    >
      <div>
        <h2
          css={[
            tw`relative font-bold text-4xl max-w-[15ch] after:(absolute -top-4 left-0 w-16 h-[3px] bg-yellow-900)`,
            `::after{content: ''}`,
          ]}
        >
          Why should you have a cat?
        </h2>
        <p css={tw`mt-10 mb-14`}>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <Link to='/why-should-you-have-a-cat'>
          <span css={tw`uppercase font-bold text-yellow-900 text-opacity-80`}>
            Read more &#x2192;
          </span>
        </Link>
      </div>
      <div css={tw`grid grid-cols-[3fr 9fr 9fr] grid-rows-[auto 1fr] gap-6`}>
        <img
          src={require('assets/images/intro-1.png').default}
          alt='Intro 1'
          css={tw`col-span-2`}
        />
        <img
          src={require('assets/images/intro-2.png').default}
          alt='Intro 2'
          css={tw`col-start-3 col-span-2 row-span-2`}
        />
        <img
          src={require('assets/images/intro-3.png').default}
          alt='Intro 3'
          css={tw`col-start-2 row-start-2 row-span-2`}
        />
      </div>
    </section>
  );
};

export default Intro;
