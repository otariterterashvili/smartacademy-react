import styled from "styled-components"

export const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: all 0.3s;
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  span {
    font-weight: bold;
    color: #404c5d;
  }

  &:hover {
    background-color: palevioletred;
    color: #fff;
  }
`
