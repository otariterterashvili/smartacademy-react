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
export const StyledRound = styled.button`
  background: transparent;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #404c5d;
  color: palevioletred;
  margin: 0 1em;
  position: relative;
  padding: 0.25em 1em;
  transition: all 0.3s;
  padding-left: ${(props) => props.pl};
  padding-right: ${(props) => props.pr};
  outline: none;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
    border-radius: 50%;
    box-shadow: inset 0 0 0 1px #c82647;
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
    background: #c82647;
    border-radius: 50%;
    box-shadow: inset 0 0 0 50px #404c5d;
  }
  &:hover {
    box-shadow: 10px 10px 25px 0 rgba(0, 0, 0, 0.25);
    &::before {
      box-shadow: inset 0 0 0 1px #404c5d;
    }
  }
  &.animate {
    &::after {
      box-shadow: inset 0 0 0 1px yellow;
    }
    &::before {
      box-shadow: inset 0 0 0 1px yellow;
      background: yellow;
    }
  }
`

export const Parent = styled.div`
  display: flex;
  padding-top: 20px;
  &.parent {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
export const ChildWrapper = styled.div`
  display: flex;
`
export const Container = styled.div`
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`
