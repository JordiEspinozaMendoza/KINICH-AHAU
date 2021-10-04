import { Form } from "react-bootstrap";
import styled from "styled-components";
export const StyledForm = styled(Form)`
  
  /* background: ${(props) => props.theme.cardBackground}; */
  /* border:  ${(props) => props.theme.cardBorder}; */
  
  .form-check {
    .form-check-label {
      color: ${(props) => props.theme.forms.color};
    }
  }
  .form-group {
    .form-label {
      color: ${(props) => props.theme.forms.color};
    }
    input,
    textarea,
    select,
    option {
      border-radius: 0;
      border: 1px solid ${(props) => props.theme.forms.borderColor};
      background-color: ${(props) => props.theme.forms.backgroundColor};
      color: ${(props) => props.theme.forms.color};
    }
  }
`;
