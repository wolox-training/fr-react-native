import React from 'react';
import { Image } from 'react-native';
import SearchBar from '@app/screens/Search/components/SearchBar';
import { lightBlue } from '@constants/colors';

import headerBackground from '../assets/general/bc_nav_bar.png';
import back from '../assets/navigation_bar/ic_back.png';
import { white } from '../constants/colors';
import { NAMES } from '../constants/screenNames';
import IconHeader from '../app/components/IconHeader';
import IconTab from '../app/components/IconTab';

import { stylesGenericOptions, stylesLibraryHeader } from './navigationOptionsStyles';

export const defaultNavigationOptionsTab = ({ navigation }) => ({
  tabBarIcon: ({ focused }) => {
    const { routeName } = navigation.state;
    return <IconTab route={routeName} focused={focused} />;
  }
});

export const navigationOptionsStyle = {
  headerBackground: <Image source={headerBackground} />,
  headerBackImage: <Image style={stylesGenericOptions.imageBack} source={back} />,
  headerBackTitle: null,
  shadowRadius: 0,
  shadowOffset: {
    height: 0
  },
  headerStyle: {
    borderBottomWidth: 0,
    backgroundColor: lightBlue
  },
  headerTitleStyle: {
    color: white,
    fontWeight: 'bold',
    fontSize: 17
  }
};

export const defaultNavigationOptions = {
  defaultNavigationOptions: navigationOptionsStyle,
  headerLayoutPreset: 'center'
};

export const navigationOptionsTitle = name => ({
  title: NAMES[name]
});

export const navigationOptionsLibrary = (name, searchRoute) => ({
  ...navigationOptionsTitle(name),
  headerLeft: <IconHeader style={stylesLibraryHeader.bellIcon} icon="bell" route={searchRoute} />,
  headerRight: <IconHeader style={stylesLibraryHeader.searchIcon} icon="search" route={searchRoute} />
});

export const navigationOptionsSearch = () => ({
  headerTitle: <SearchBar />,
  headerLeft: null
});
