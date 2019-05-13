import React from 'react';
import { Image } from 'react-native';

import headerBackground from '../assets/general/bc_nav_bar.png';
import back from '../assets/navigation_bar/ic_back.png';
import { white } from '../constants/colors';
import { NAMES } from '../constants/screenNames';
import IconHeader from '../app/components/IconHeader';
import IconTab from '../app/components/IconTab';

import { getIconName } from './utils/iconName';
import { stylesGenericOptions, stylesLibraryHeader } from './navigationOptionsStyles';

export const defaultNavigationOptionsTab = ({ navigation }) => ({
  tabBarIcon: ({ focused }) => {
    const { routeName } = navigation.state;
    const iconName = `${getIconName(routeName)}${focused ? 'Active' : 'Passive'}`;
    return <IconTab icon={iconName} />;
  }
});

export const navigationOptionsStyle = {
  headerBackground: <Image source={headerBackground} />,
  headerBackImage: <Image style={stylesGenericOptions.imageBack} source={back} />,
  headerBackTitle: null,
  headerTitleStyle: {
    color: white,
    fontWeight: 'bold',
    fontSize: 17
  }
};

export const navigationOptionsTitle = name => ({
  title: NAMES[name]
});

export const navigationOptionsLibrary = name => ({
  ...navigationOptionsTitle(name),
  headerLeft: <IconHeader style={stylesLibraryHeader.bellIcon} icon="bell" action={() => {}} />,
  headerRight: <IconHeader style={stylesLibraryHeader.searchIcon} icon="search" action={() => {}} />
});
