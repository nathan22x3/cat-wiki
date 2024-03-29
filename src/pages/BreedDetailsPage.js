import LevelBar from 'components/LevelBar';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const BreedDetailsPage = () => {
  const [data, setData] = useState(null);
  const [photo, setPhoto] = useState('');
  const [otherPhotos, setOtherPhotos] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/breeds/search?q=${name}`,
        {
          headers: {
            'X-Api-Key': process.env.REACT_APP_CAT_API,
          },
        }
      );
      const json = await res.json();
      setData(json[0]);
    })();

    return () => setData(null);
  }, [name]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/${data?.reference_image_id}`,
        {
          headers: {
            'X-Api-Key': process.env.REACT_APP_CAT_API,
          },
        }
      );
      const json = await res.json();
      setPhoto(json.url);

      await fetch(
        `https://cat-wiki-nathan22x3.herokuapp.com/breed/${data?.id}`,
        {
          method: 'POST',
          body: JSON.stringify({
            id: data?.id,
            name: data?.name,
            image: json.url,
            description: data?.description,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    })();

    (async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_id=${data?.id}&limit=8`,
        {
          headers: {
            'X-Api-Key': process.env.REACT_APP_CAT_API,
          },
        }
      );
      const json = await res.json();
      setOtherPhotos(json);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <main>
      <section
        css={tw`grid grid-cols-1 gap-y-16 pt-12 px-5 mt-10 mb-20 lg:(grid-cols-3 px-12 gap-x-24)`}
      >
        <div
          style={{
            aspectRatio: '1 / 1',
            backgroundImage: `url("${photo}")`,
          }}
          css={[
            tw`relative rounded-3xl bg-cover bg-center bg-[#bca469] after:(absolute top-7 -left-3 bottom-7 z-[-1] w-20 rounded-2xl bg-[#DEC68B])`,
            `::after{content:''}`,
          ]}
        ></div>
        <div css={tw`col-span-2`}>
          <h2 css={tw`text-3xl font-semibold`}>{data?.name}</h2>
          <p css={tw`mt-6 mb-8 font-medium lg:text-lg`}>{data?.description}</p>
          <div css={tw`flex flex-col gap-y-6`}>
            <div css={tw`text-sm lg:text-base`}>
              <span css={tw`font-bold`}>Temperament: </span>
              {data?.temperament}
            </div>
            <div css={tw`text-sm lg:text-base`}>
              <span css={tw`font-bold`}>Origin: </span>
              {data?.origin}
            </div>
            <div css={tw`text-sm lg:text-base`}>
              <span css={tw`font-bold`}>Life Span: </span>
              {data?.life_span} years
            </div>
            <LevelBar
              label='Adaptability'
              level={data?.adaptability}
              css={tw`max-w-[520px]`}
            />
            <LevelBar
              label='Affection level'
              level={data?.affection_level}
              css={tw`max-w-[520px]`}
            />
            <LevelBar
              label='Child Friendly'
              level={data?.child_friendly}
              css={tw`max-w-[520px]`}
            />
            <LevelBar
              label='Grooming'
              level={data?.grooming}
              css={tw`max-w-[520px]`}
            />
            <LevelBar
              label='Intelligence'
              level={data?.intelligence}
              css={tw`max-w-[520px]`}
            />
            <LevelBar
              label='Health issues'
              level={data?.health_issues}
              css={tw`max-w-[520px]`}
            />
            <LevelBar
              label='Social needs'
              level={data?.social_needs}
              css={tw`max-w-[520px]`}
            />
            <LevelBar
              label='Stranger friendly'
              level={data?.stranger_friendly}
              css={tw`max-w-[520px]`}
            />
          </div>
        </div>
      </section>
      <section css={tw`px-5 lg:p-0`}>
        <h2 css={tw`text-3xl font-semibold`}>Other photos</h2>
        <div
          css={tw`grid grid-cols-2 gap-4 mt-10 mb-20 lg:(grid-cols-4 gap-12)`}
        >
          {otherPhotos?.map(({ id, url }) => (
            <div
              key={id}
              style={{
                aspectRatio: '1 / 1',
                backgroundImage: `url("${url}")`,
              }}
              css={tw`relative col-span-1 rounded-3xl bg-cover bg-center bg-[#bca469]`}
            ></div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BreedDetailsPage;
