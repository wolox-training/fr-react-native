import React from 'react';
import { StyleSheet, Image } from 'react-native';

import headerBackground from '../assets/general/bc_nav_bar.png';
import back from '../assets/navigation_bar/ic_back.png';
import { white } from '../constants/colors';
import { NAMES } from '../constants/screenNames';
import IconHeader from '../app/components/IconHeader';

const stylesGenericOptions = StyleSheet.create({
  imageBack: {
    height: 20,
    width: 20,
    marginLeft: 15
  }
});

const stylesLibraryHeader = StyleSheet.create({
  bellIcon: {
    marginLeft: 15
  },
  searchIcon: {
    marginRight: 15
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

export const navigationOptionsLibrary = {
  title: NAMES.Library,
  headerLeft: <IconHeader style={stylesLibraryHeader.bellIcon} icon="bell" action={() => {}} />,
  headerRight: <IconHeader style={stylesLibraryHeader.searchIcon} icon="search" action={() => {}} />
};

export const navigationOptionsBookDetail = {
  title: NAMES.BookDetail
};
