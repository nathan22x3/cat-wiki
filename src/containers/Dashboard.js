import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://cat-wiki-nathan22x3.herokuapp.com/breed/list'
      );
      const json = await res.json();
      const filteredData = json
        .sort((a, b) => b.visited_count - a.visited_count)
        .slice(0, 4);
      setData(filteredData);
    })();
  }, []);

  return (
    <section
      css={tw`pt-5 px-7 pb-12 rounded-br-[42px] rounded-bl-[42px] bg-gray-200 lg:(pt-10 px-20 pb-20)`}
    >
      <p
        css={[
          tw`relative font-medium w-[fit-content] text-sm lg:text-base   after:(absolute -bottom-3 left-0 w-16 h-[3px] bg-yellow-900)`,
          `::after{content: ''}`,
        ]}
      >
        Most Searched Breeds
      </p>
      <div css={tw`flex justify-between items-end my-6 lg:(mt-9 mb-10)`}>
        <h2
          css={tw`font-bold max-w-[15ch] text-lg sm:text-xl md:text-3xl lg:text-4xl`}
        >
          66+ Breeds For you to discover
        </h2>
        <Link to='/top-breeds'>
          <span
            css={tw`hidden lg:(block uppercase font-bold text-yellow-900 text-opacity-80)`}
          >
            See more &#x2192;
          </span>
        </Link>
      </div>
      <div
        css={tw`grid grid-cols-2 gap-4 sm:gap-6 md:gap-9 lg:(grid-cols-4 gap-12)`}
      >
        {data?.map(({ id, name, image }) => (
          <Link key={id} to={`/breed/${name}`}>
            <div
              css={tw`flex flex-col gap-y-4 font-semibold text-sm lg:text-base`}
            >
              <div
                style={{
                  aspectRatio: '1 / 1',
                  backgroundImage: `url(${image})`,
                }}
                css={tw`overflow-hidden rounded-2xl bg-cover bg-center`}
              ></div>
              <p>{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
