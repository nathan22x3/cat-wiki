import React from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const SearchedResults = ({ data }) => {
  return (
    <div
      css={
        data.length === 0
          ? tw`hidden`
          : tw`overflow-y-auto absolute top-16 left-0 flex flex-col gap-y-1 w-full h-52 p-5 rounded-3xl bg-white`
      }
    >
      {data?.map(({ id, name }) => (
        <Link key={id} to={`/breed/${name}`}>
          <p css={tw`p-3 rounded-xl duration-200 hover:bg-[#f5f5f5]`}>{name}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchedResults;
