import React from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const SearchPopup = ({ isShow, searchValue, data, onChange, onClose }) => {
  return (
    <div
      css={[
        tw`absolute top-0 left-0 z-20 transform  flex flex-col gap-y-7 w-screen pt-5 px-5 pb-8 duration-300 bg-white`,
        !isShow ? tw`-translate-y-full` : tw`translate-y-0`,
      ]}
    >
      <button
        onClick={onClose}
        css={tw`self-end w-10 h-10 rounded-lg text-2xl bg-[#f5f5f5]`}
      >
        &#x2715;
      </button>
      <div
        css={tw`flex items-center px-5 py-3 border border-black rounded-full text-sm`}
      >
        <input
          type='text'
          value={searchValue}
          placeholder='Enter your breed'
          onChange={onChange}
          css={tw`flex-1 outline-none bg-transparent`}
        />
        <img
          src={require('assets/images/search.svg').default}
          alt='Search'
          css={tw`w-4 h-4`}
        />
      </div>
      <div
        css={
          data.length === 0
            ? tw`hidden`
            : tw`flex flex-col gap-y-1 w-full rounded-3xl bg-white`
        }
      >
        {data?.map(({ id, name }) => (
          <Link key={id} to={`/breed/${name}`}>
            <p css={tw`p-3 rounded-xl duration-200 hover:bg-[#f5f5f5]`}>
              {name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchPopup;
