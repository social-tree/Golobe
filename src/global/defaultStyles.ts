import { css } from "styled-components";

/* Typograhy */

const HeadingL = css`
  font-size: 40px;
  line-height: 49px;
`;

const HeadingM = css`
  font-size: 36px;
  line-height: 44px;
`;

const HeadingS = css`
  font-size: 32px;
  line-height: 39px;
`;

const ParagraphL = css`
  font-size: 24px;
  line-height: 29px;
`;

const ParagraphM = css`
  font-size: 20px;
  line-height: 24px;
`;

const ParagraphS = css`
  font-size: 16px;
  line-height: 20px;
`;

/* Button Types */

const primaryButton = css`
  background-color: #8dd3bb;
  border-radius: 4px;

  &:hover {
    background-color: #9be0c8;
    border-radius: 0px;
  }

  &:focus {
    background-color: #a5ebd3;
    outline: 1px solid #ffffff;
    border-radius: 4px;
  }

  &:active {
    background-color: #82cbb2;
    border-radius: 0px;
  }

  &:disabled {
    background-color: #d2d1d3;
    border-radius: 4px;
  }
`;

const secondaryButton = css`
  border: 1px solid #8dd3bb;
  background-color: transparent;
  border-radius: 4px;

  &:hover {
    border: 1px solid #9be0c8;
  }

  &:focus {
    border: 3px solid #8dd3bb;
  }

  &:active {
    border: 1px solid #8dd3bb;
    border-radius: 4px;
  }

  &:disabled {
    border: 1px solid #d2d1d3;
    border-radius: 4px;
  }
`;

const tertiaryButton = css`
  color: #112211;
  background-color: transparent;
  border: 0;

  &:hover {
    color: #9be0c8;
  }

  &:focus {
    color: #112211;
  }

  &:active {
    color: #82cbb2;
  }

  &:disabled {
    color: #8f8c91;
  }
`;

/* Button Sizes */

const smallButton = css`
  min-width: 82px;
  min-height: 32px;
`;

const mediumButton = css`
  min-width: 82px;
  min-height: 40px;
`;

const largeButton = css`
  min-width: 82px;
  min-height: 48px;
`;

export { HeadingL, HeadingM, HeadingS, ParagraphL, ParagraphM, ParagraphS };

export {
  primaryButton,
  secondaryButton,
  tertiaryButton,
  smallButton,
  mediumButton,
  largeButton,
};
