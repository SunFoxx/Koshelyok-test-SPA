import React, { Component } from 'react';
import PropTypes from "prop-types";
import styled from "styled-components";


export default class CitySelector extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
    };

    render() {
        const {
            children,
        } = this.props;

        return (
          <Container>
              {children}
          </Container>
        );
    }
}

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-self: center;
  border: 1px solid #aaaaaa;
`;
