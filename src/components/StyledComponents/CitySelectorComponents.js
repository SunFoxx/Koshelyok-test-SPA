import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: row;
  align-self: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
`;

export const Button = styled.div`
  font-size: 2rem;
  color: #ffffff;
  background-color: ${props => props.bgColor || '#282c34'};
  padding: 10px 0;
  text-align: center;
  transition: background-color .25s;
  display: flex;
  flex-grow: 1;
  vertical-align: middle;
  justify-content: center;

  &:hover {
    color: #ffffff;
    background-color: #61dafb;
    cursor: pointer;
  }
`;
