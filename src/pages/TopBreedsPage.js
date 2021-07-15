import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const TopBreedsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        'https://cat-wiki-nathan22x3.herokuapp.com/breed/list'
      );
      const json = await res.json();
      const filteredData = json
        .sort((a, b) => b.visited_count - a.visited_count)
        .slice(0, 10);
      setData(filteredData);
    })();
  }, []);

  return (
    <main>
      <h1 css={tw`my-10 text-3xl font-bold`}>Top 10 most searched breeds</h1>
      <section
        style={{ counterReset: 'rank' }}
        css={tw`grid grid-cols-1 gap-10 px-10 mb-20 sm:grid-cols-2 lg:(grid-cols-1 p-0)`}
      >
        {data?.map(({ id, name, image, description }) => (
          <Link key={id} to={`/breed/${name}`}>
            <div
              css={tw`grid grid-cols-1 gap-x-10 gap-y-6 font-semibold lg:grid-cols-[auto 1fr]`}
            >
              <div
                style={{
                  aspectRatio: '1 / 1',
                  backgroundImage: `url(${image})`,
                }}
                css={tw`overflow-hidden rounded-2xl bg-cover bg-center lg:(w-[170px] h-[170px])`}
              ></div>
              <div>
                <p
                  css={[
                    tw`mb-6 text-3xl font-bold`,
                    `::before{counter-increment: rank;content: counter(rank) ". "}`,
                  ]}
                >
                  {name}
                </p>
                <p css={tw`font-medium`}>{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default TopBreedsPage;
