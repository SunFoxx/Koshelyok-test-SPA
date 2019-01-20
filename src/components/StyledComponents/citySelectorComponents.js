import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-self: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
      border-radius: 20px;
`;

export const Button = styled.div`
  font-size: 2rem;
  color: #ffffff;
  background-color: ${props => props.bgColor || '#282c34'};
  padding: 10px;
  text-align: center;
  transition: background-color .25s;
 

  &:hover {
    color: #ffffff;
    background-color: #61dafb;
    cursor: pointer;
  }
`;

export const Display = styled.div`
  font-size: ${props => props.fontSize};
  color: ${props => props.animate ? '#61dafb' : '#282c34'};
  background-color: #ffffff;
  text-align: center;
  margin-bottom: 1px;
  padding: 1rem;
  transition: color .25s;
`;
