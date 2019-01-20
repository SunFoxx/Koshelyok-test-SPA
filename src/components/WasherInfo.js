import PropTypes from "prop-types";
import React, { Component } from "react";
import Text from "./Text";
import {Coordinates, InfoContainer, Phone, Title} from "./StyledComponents/WasherListComponents";

export default class WasherInfo extends Component {
    static propTypes = {
        washerObject: PropTypes.shape({}),
    };

    render() {
        const { washerObject } = this.props;
        if (!washerObject) {
            return null;
        }
        const {
          name,
          address,
          phone,
          hours,
          coordinates,
        } = washerObject;
        return (
          <InfoContainer>
              <Title>
                <Text text={name} fontSize={16} />
              </Title>
              <Text text={address} fontSize={13} color={'#707070'} />
              <Phone>
                <Text text={phone} />
              </Phone>
              <Text text={hours} fontSize={12} />
              <Coordinates>
                <Text text={coordinates} fontSize={12} color={'#cd4f1f'}/>
              </Coordinates>
          </InfoContainer>
        );
    }
}
