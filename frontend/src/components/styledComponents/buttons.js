import styled from "styled-components";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typeScale } from "utils/theme/texts";

export const BUTTON_MODIFIERS = {
  small: () => `
    padding: 6px;
    font-size: ${typeScale.helperText};

    `,
  large: () => `
    padding: 14px 22px;
    font-size: ${typeScale.header5};
`,
};
export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.buttons.backgroundColor};
  color: ${(props) => props.theme.buttons.color};
  font-weight: bold;
  box-shadow: 0px 0px 0px 0px "rgba(0,0,0,0.2)";
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
export const SecondaryButton = styled.button`
  background-color: ${(props) => props.theme.buttons.secondary.backgroundColor};
  color: ${(props) => props.theme.buttons.secondary.color};
  font-weight: bold;
  box-shadow: 0px 0px 0px 0px "rgba(0,0,0,0.2)";
  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;
