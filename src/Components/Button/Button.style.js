import styled from "styled-components";

export const Button =styled.button`
  font-size: ${(props)=>props.font_size};;
  box-sizing: border-box;
  border: 2px solid var(--color-text);
  margin: 5px;
  padding: ${(props)=>props.padding};
  color: var(--color-text);
  letter-spacing: .05em;
  font-weight: bold;
  background-color: var(--color-bg);
  &:hover{
    cursor: pointer;
    background-color: var(--color-red);
    transition: 0.1s;
  }
`