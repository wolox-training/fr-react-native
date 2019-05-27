import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import IconSearchBar from '@app/components/IconSearchBar';
import { withNavigation, NavigationActions } from 'react-navigation';
import { actionCreators } from '@redux/search/actions';
import { connect } from 'react-redux';

import styles from './styles';

class SearchBar extends Component {
  goBack = () => {
    const { navigation, write } = this.props;
    write('');
    navigation.dispatch(NavigationActions.back());
  };

  onChangeText = text => {
    const { write } = this.props;
    write(text);
  };

  render() {
    return (
      <View style={styles.searchBar}>
        <IconSearchBar icon="search" style={[styles.searchIcon, styles.iconSize]} />
        <TextInput
          style={styles.inputSearch}
          autoCapitalize="none"
          onChangeText={text => this.onChangeText(text)}
        />
        <TouchableOpacity onPress={this.goBack}>
          <IconSearchBar icon="close" style={[styles.closeIcon, styles.iconSize]} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  text: state.search.text
});

const mapDispatchToProps = dispatch => ({
  write: text => dispatch(actionCreators.write(text))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNavigation(SearchBar));
