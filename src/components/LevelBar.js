import { css } from '@emotion/react';
import React from 'react';
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';

const LevelBar = ({ label, level = 0, className }) => {
  return (
    <div
      css={tw`grid grid-cols-[150px 1fr] items-center lg:gap-8`}
      {...{ className }}
    >
      <span css={tw`font-bold text-sm lg:text-base`}>{label}: </span>
      <div css={tw`flex-1 grid grid-cols-5 gap-x-1 lg:gap-x-2`}>
        {new Array(5).fill('level').map(() => (
          <span
            key={`${(Math.random() * 10000).toString(16)}`}
            css={[
              tw`h-[10px] rounded-lg bg-[#544439]`,
              css`
                :nth-of-type(${level}n) ~ * {
                  background-color: #e0e0e0;
                }
              `,
            ]}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default LevelBar;
