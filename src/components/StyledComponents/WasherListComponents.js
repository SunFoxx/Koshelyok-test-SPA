import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-height: 90vh;
`;

export const ListBlock = styled.div`
  width: 300px;
  min-width: 300px;
  border-right: 1px solid black;
  display: inline-block;
  min-height: 100px;
  overflow-y: scroll;
`;

export const ListElement = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${props => props.selected ? '#d7f0ff' : 'white'};
  padding: 15px;
`;

export const LoaderContainer = styled.div`
    margin: 50px 0;
    height: 100%;
`;

export const InfoContainer = styled.div`
    max-width: 350px;
    padding: 0 15px;
`;

export const Title = styled.div`
    margin: 10px 0;
    font-weight: 800;
`;

export const Phone = styled.div`
    font-weight: 600;
    margin: 5px 0;
`;

export const Coordinates = styled.div`
    margin-top: 25px;
`;
