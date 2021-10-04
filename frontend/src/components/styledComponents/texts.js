import { Link } from "react-router-dom";
import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "utils/theme";

export const HEADERS_MODIFIERS = {
  h1: () => `
        font-size: ${typeScale.header1};
        `,
  h2: () => `
        font-size: ${typeScale.header2};
        `,
  h3: () => `
        font-size: ${typeScale.header3};
        `,
  h4: () => `
        font-size: ${typeScale.header4};
        `,
  h5: () => `
        font-size: ${typeScale.header5};
        `,
  heroHeader: () => `
            font-size: ${typeScale.smallHeroHeader};
            `,
};
export const Header = styled.h1`
  color: ${(props) => props.theme.headers.color};
  font-weight: bold;
  ${applyStyleModifiers(HEADERS_MODIFIERS)}
`;
export const Span = styled.span`
  color: ${(props) => props.theme.color};
`;
