import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, ButtonGroup, Button } from './StyledComponents/CitySelectorComponents'

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

    componentDidMount() {
        const {
            cityArray,
            selectedIndex,
            onSelect,
        } = this.props;
        onSelect(cityArray[selectedIndex], selectedIndex);
    }

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
                          bgColor={selectedIndex === index ? "#0a92dd" : "#0b2d4e"}
                          onClick={() => {
                              onSelect(city, index);
                          }}
                          key={city}
                        >
                            {city}
                        </Button>
                      )))}
                </ButtonGroup>
            </Container>
        );
    }
}
