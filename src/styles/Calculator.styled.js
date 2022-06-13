import styled from 'styled-components';

const colorInput = '#B9C8C8'
const colorButton = '#B4B4B4'

export const Main = styled.main`
  align-items: center;
  box-shadow: 0 0 2em black;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  width: 300px;

  span {
  background-color: ${colorInput};
  border-radius: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 15px 0px 15px 0px;
  padding-left: 3px;
  height: 30px;
  width: 260px;
  };
  `

export const Button = styled.button`
  background-color: ${ colorButton };
  color: red;
  display: flex;
`

export const Result = styled.div`
  margin-bottom: 15px;
`
