import React from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const TopBreeds = () => {
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
        <Link to='/top-10-most-searched-breads'>
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
        <Link to='/breed/Bengal'>
          <div
            css={tw`flex flex-col gap-y-4 font-semibold text-sm lg:text-base`}
          >
            <div
              style={{
                aspectRatio: '1 / 1',
                backgroundImage:
                  'url("https://s3-alpha-sig.figma.com/img/d98b/e6d2/5adeec61af9e8139176bef6da50ea692?Expires=1627257600&Signature=WnCu4MKLetB8VjrDuQc5xr~RnMs04I7i~0vw8ykJ7-XC6R7LGKQpyw2owlX0s9dy3bmqJZ8gGOW5IE8Jjtw0yI1CvEsvFdwKHwQWVd-2fQQw1iHnGb4tdRy31CdozdfJbUyoERfyY5F5FUZmBnghx8Ny5zlKxPIoXouTdFE3upEeIeInH3vkI7b1AjpZjWsZWDsvnOaXT6dRnvuM4oXkuPYCmO0lvKVc0Fe7wdgb7NHhbSGO32vBmNp5kRlWGtzghEmA7t9C8nawuz~TmJfuk5ml7RwvHJJQmBGb7-CGZDqJfqq4BoGjQO5HRGK5OEXw-50~OasxBsbforP0fA~LGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")',
              }}
              css={tw`overflow-hidden rounded-2xl bg-cover bg-center`}
            ></div>
            <p>Bengal</p>
          </div>
        </Link>
        <Link to='/breed/Savannah'>
          <div
            css={tw`flex flex-col gap-y-4 font-semibold text-sm lg:text-base`}
          >
            <div
              style={{
                aspectRatio: '1 / 1',
                backgroundImage:
                  'url("https://s3-alpha-sig.figma.com/img/5092/ee75/5027e248bedc17531576ee89e8dcb0f0?Expires=1627257600&Signature=ZCfSxk7PIs4P-HrzF6aBl6PsaNtO19GURYXRZxhgH3y5lmREAlcOzBjh~293DmnwYpHywrbIjx-kbQalEsJ0xwx9ONFJ4lg2Rr4-zZKkdLyQk-kpKOfpVb6a3m5gW8xDCHt3FwXg3mqZlQUEt2QAU0J-oW~sq9dEw13k9qc1gjpwHZrck~K~XuKU5i8awOQPBs8UXs~nvLCyroZPzzumPmfYcjfSEYwlnehcG1gvpDwuTzuUDEiobD6L2OmjcixR8DngbT6w3wZSKgWoXHhQoCi-~7Ocp0kY~9C8YcoToSYZ6hwPFzzaE7wNoo~76DJj3jEPMgNW0m9MymEtoJ4PHg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")',
              }}
              css={tw`overflow-hidden rounded-2xl bg-cover bg-center`}
            ></div>
            <p>Savannah</p>
          </div>
        </Link>
        <Link to='/breed/Norwegian Forest Cat'>
          <div
            css={tw`flex flex-col gap-y-4 font-semibold text-sm lg:text-base`}
          >
            <div
              style={{
                aspectRatio: '1 / 1',
                backgroundImage:
                  'url("https://s3-alpha-sig.figma.com/img/5f98/5ae6/2937b84dd18dd91b8678ba0a17fe913e?Expires=1627257600&Signature=KJd4Ih43ald7yofbIWFf8M9iKkqbKn2giwkyEjhwJD8YknuJpmsdF1qKxsXLSTqrsddK4ahKCDQzfoCt~zNoTOAFhbcE2u0jEdbV75wWkB5cgIpqGVxGEn~fbTMdrqCq~C7edsJUqI1zMNpjCvEe-hfaR3PmSmQpzO3Jy6tcyXhKxa4G8vLp53vn-5rY6GW9cWIO50PTEOkG0p51XmKM0UNREAoW5bENIzEGvhBZ0PQaihM4u~T3XXnsUTyFVkKOAebfCZZ8G5~p-b6B7RWKtMTK7tPq0RME0PC8CdQc3dD2E8RbxAx0nxbbKLwmJzgMcHbOj19pcWbwdOe2KycqvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")',
              }}
              css={tw`overflow-hidden rounded-2xl bg-cover bg-center`}
            ></div>
            <p>Norwegian Forest Cat</p>
          </div>
        </Link>
        <Link to='/breed/Selkirk Rex'>
          <div
            css={tw`flex flex-col gap-y-4 font-semibold text-sm lg:text-base`}
          >
            <div
              style={{
                aspectRatio: '1 / 1',
                backgroundImage:
                  'url("https://s3-alpha-sig.figma.com/img/58d3/3ced/95dae136856a50d01b8c282c7acd643d?Expires=1627257600&Signature=Q8dXCJJMc8BS6lHneHeE7sklSgANg1PQHW9nAwaqjrotFxWZ4mUe4rIQtgicaAC97AmG55aWy2ZnKBvzcxoK9UZQxDvniQ6VQbOxFV626NRsKipxD4MyTNHN11uo6I-L81D8EO0CaAGllTBCGNGaXePvsEbdcU1BOXPs3EqXrxhdM6h8M44msHQqyV5z9CEMIJl41zo86XCTC6TqhL1PthDxBGruJOhQun6XMTcCx3XXSQFSZbAx3SwvaQfYGxJ4lV0~PAqRRmwDZ8NnIkTj9JukXOkzbw8ggigphru2DMKvQpWQOJPIdseIAW333tGc83hojrdVkiWlNBar4JHTMQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA")',
              }}
              css={tw`overflow-hidden rounded-2xl bg-cover bg-center`}
            ></div>
            <p>Selkirk Rex</p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TopBreeds;
