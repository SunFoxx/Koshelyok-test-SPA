import React from 'react';
import { connect } from 'react-redux';
import { selectCity } from '../../actions';
import CitySelector from '../../components/CitySelector';
import SimpleBorderContainer from '../../components/SimpleBorderContainer';

class Home extends React.Component {
  state = {
    selectedCityIndex: 0,
  };

  render() {
    const {
      selectCity,
    } = this.props;
    const { selectedCityIndex } = this.state;

    return (
      <SimpleBorderContainer>
        <CitySelector
          cityArray={['Москва', 'Санкт-Петербург', 'Нижний новгород']}
          selectedIndex={selectedCityIndex}
          onSelect={(city, index) => {
            selectCity(city);
            this.setState({
              selectedCityIndex: index,
            })
          }}
        />
      </SimpleBorderContainer>
    );
  }
}

const mapStateToProps = (state) => {
  const { selectedCity, carWashMap } = state.cityReducer;
  const selectedCityData = carWashMap[selectedCity];
  return {
    selectedCity,
    carWashMap,
    selectedCityData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectCity: (city) => dispatch(selectCity(city)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
