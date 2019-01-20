import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Text from "./Text";
import WasherInfo from "./WasherInfo";
import Loader from 'react-loader';
import {ListBlock, ListContainer, ListElement, LoaderContainer} from "./StyledComponents/WasherListComponents";

export default class WashersList extends Component {
    static propTypes = {
        washersData: PropTypes.shape({}).isRequired,
    };

    state = {
        selectedIndex: undefined,
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.washersData.fetching !== this.props.washersData.fetching) {
            this.setState({ selectedIndex: undefined });
        }
    }

    _renderList() {
        const {
            washersData,
        } = this.props;

        const {
            selectedIndex,
        } = this.state;
        const {
          fetching,
          error,
          data,
        } = washersData;
        if (fetching) {
            return (
              <LoaderContainer>
                <Loader />
              </LoaderContainer>
            );
        }
        if (error) {
            return (
              <Text text={'Произошла ошибка'} color={'red'} />
            );
        }
        if (data) {
            return (
              data.map((item, index) => (
                <ListElement
                  onClick={() => this.setState({
                      selectedIndex: (selectedIndex === index) ? undefined : index,
                  })}
                  selected={selectedIndex === index}
                  key={`${index}-${item.name}`}
                >
                    <Text text={item.name} color={'#0b2d4e'}/>
                    <Text text={item.address} fontSize={10} />
                </ListElement>
              ))
            );
        }
        return null;
    }

    render() {
        const {
            selectedIndex,
        } = this.state;
        const {
            washersData,
        } = this.props;
        return (
          <ListContainer>
              <ListBlock>
                  {this._renderList()}
              </ListBlock>
              <WasherInfo
                washerObject={(selectedIndex >= 0 && washersData.data)
                  ? washersData.data[selectedIndex]
                  : undefined}
              />
          </ListContainer>
        );
    }
}
