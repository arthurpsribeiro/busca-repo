import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../../store/ducks/repositories/types';
import { ApplicationsState } from '../../store';

import * as RepositoriesActions from '../../store/ducks/repositories/actions';
import { Text, View } from 'react-native';

interface StateProps {
  repositories: Repository[];
}

interface DispatchProps {
  loadRequest(): void;
}

type HomeProps = StateProps & DispatchProps;

class RepositoryList extends Component<HomeProps> {
  componentDidMount(): void {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { repositories } = this.props;
    return (
      <View>
        {repositories.map(repository => (
          <Text>{repository.name}</Text>
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state: ApplicationsState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RepositoryList);
