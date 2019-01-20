import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from 'styled-components';

export default class Text extends Component {
    static propTypes = {
        color: PropTypes.string,
        fontSize: PropTypes.number,
        text: PropTypes.string.isRequired,
    };

    render() {
        const { text, fontSize, color } = this.props;
        return (
          <TextDiv fontSize={fontSize} color={color}>
              {text}
          </TextDiv>
        );
    }
}

const TextDiv = styled.div`
    font-size: ${props => props.fontSize || 14}px;
    color: ${props => props.color || 'black'};
    display: block;
    word-wrap: break-word;
`;
