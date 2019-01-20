import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, ButtonGroup, Button } from './StyledComponents/citySelectorComponents'

export default class CitySelector extends Component {
    static propTypes = {
      cityArray: PropTypes.arrayOf(
        PropTypes.string,
      ).isRequired,
      onSelect: PropTypes.func,
      selectedIndex: PropTypes.number,
    };

    static defaultProps = {
        onSelect: () => {},
        selectedIndex: 0,
    };

    render() {
        const {
            cityArray,
            selectedIndex,
            onSelect,
        } = this.props;

        return (
            <Container>
                <ButtonGroup>
                    {cityArray.map((city, index) => ((
                        <Button
                          bgColor={selectedIndex === index ? "#d0b74e" : "#a07629"}
                          onClick={() => {
                              onSelect(city, index);
                          }}
                        >
                            {city}
                        </Button>
                      )))}
                </ButtonGroup>
            </Container>
        );
    }
}
