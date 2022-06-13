import styled from 'styled-components';

const colorInput = '#B9C8C8';
const button = colorInput;

export const Main = styled.main`
  align-items: center;
  box-shadow: 0 0 2em black;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 300px;

  span {
    background-color: ${colorInput};
    border-radius: 10px;
    color: white;
    display: flex;
    height: 40px;
    flex-direction: column;
    justify-content: center;
    margin: 15px 0px 15px 0px;
    padding-left: 3px;
    font-size: 22px;
    width: 260px;
  }
`;

export const Result = styled.div`
  margin-bottom: 15px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 260px;
  margin: 0px;

  button {
    background-color: white;
    border-radius: 10px;
    color: black;
    display: flex;
    margin: 2px;
    padding: 18px;
  }

  button:hover {
    background-color: ${button};
  }
`;

export const Operations = styled(Buttons)`
  margin-left: 3px;

  button:nth-child(5) {
    background-color: ${button};
    color: white;
  }
`;
