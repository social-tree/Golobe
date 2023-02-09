import { css } from "styled-components";

/* Typograhy */

const commonProperties = css`
  font-family: ${({ theme }) => theme.font};
`;

const HeadingL = css`
  ${commonProperties}
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
`;

const HeadingM = css`
  ${commonProperties}
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const HeadingS = css`
  ${commonProperties}
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const Paragraph = css`
  ${commonProperties}
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`;

const ParagraphS = css`
  ${commonProperties}
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;


export {
    HeadingL,
    HeadingM,
    HeadingS,
    Paragraph,
    ParagraphS
}

