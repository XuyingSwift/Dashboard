import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -15px;
  font-size: 12px;
  color: ${mainColor};
`;

export const GroupContainer = styled.div`
  position: relative;
  margin: 5px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  // top, right, bottom, left
  padding-bottom: 8px;
  display: block;
  width: 100%;
  border: 1px solid ${subColor};
  border-radius: 0;
  // create space around the element top right bottom right
  margin: 15px 0;
  &:focus {
    outline: none;
  }

  :hover {
    box-shadow: 0 0 3px grey, 0 1px 5px grey;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;