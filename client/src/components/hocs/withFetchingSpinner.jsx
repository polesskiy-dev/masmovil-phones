import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../presentional/Spinner/Spinner';
import getIsFetching from '../../selectors/spinner.selector';

const withFetchingSpinner = Component => {
  class WithFetchingSpinner extends PureComponent {
    static propTypes = {
      isFetching: PropTypes.bool.isRequired,
    };

    render() {
      const { isFetching, ...restProps } = this.props;

      return isFetching
        ? <Spinner />
        : <Component {...restProps}/>
    }
  }

  WithFetchingSpinner.displayName = `WithFetchingSpinner${Component.displayName ||
    Component.name ||
    'Component'}`;

  return connect(getIsFetching)(WithFetchingSpinner);
};

export default withFetchingSpinner;
