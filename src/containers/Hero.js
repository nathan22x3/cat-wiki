import SearchedResults from 'components/SearchedResults';
import SearchPopup from 'components/SearchPopup';
import React, { useCallback, useState } from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import { debounce } from 'utils';

const Hero = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearchValue(value);
    handleSearch(value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((value) => {
      fetch(`https://api.thecatapi.com/v1/breeds/search?q=${value}`)
        .then((res) => res.json())
        .then((data) => setSearchedData(data));
    }, 500),
    []
  );

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
        css={tw`hidden lg:(relative z-10 self-start flex items-center px-5 py-4 rounded-full bg-white)`}
      >
        <input
          type='text'
          value={searchValue}
          placeholder='Enter your breed'
          onChange={handleChange}
          css={tw`outline-none bg-transparent`}
        />
        <img
          src={require('assets/images/search.svg').default}
          alt='Search'
          css={tw`w-4 h-4`}
        />
        <SearchedResults data={searchedData} />
      </div>
      <button
        onClick={() => setShowPopup(true)}
        css={tw`self-start flex items-center gap-x-3 px-3 py-2 rounded-full text-xs bg-white lg:hidden`}
      >
        <span>Search</span>
        <img
          src={require('assets/images/search.svg').default}
          alt='Search'
          css={tw`w-4 h-4`}
        />
      </button>
      <SearchPopup
        isShow={showPopup}
        searchValue={searchValue}
        data={searchedData}
        onChange={handleChange}
        onClose={() => setShowPopup(false)}
      />
    </section>
  );
};

export default Hero;
