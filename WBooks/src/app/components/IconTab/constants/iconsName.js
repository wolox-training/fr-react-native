import addNewActive from '@assets/tool_bar/ic_add_new_active.png';
import addNewPassive from '@assets/tool_bar/ic_add_new_passive.png';
import libraryActive from '@assets/tool_bar/ic_library_active.png';
import libraryPassive from '@assets/tool_bar/ic_library_passive.png';
import myRentalsActive from '@assets/tool_bar/ic_myrentals_active.png';
import myRentalsPassive from '@assets/tool_bar/ic_myrentals_passive.png';
import settingsActive from '@assets/tool_bar/ic_settings_active.png';
import settingsPassive from '@assets/tool_bar/ic_settings_passive.png';
import wishlistActive from '@assets/tool_bar/ic_wishlist_active.png';
import wishlistPassive from '@assets/tool_bar/ic_wishlist_passive.png';
import { ROUTES } from '@constants/routes';

export const icons = {
  addNewActive,
  addNewPassive,
  libraryActive,
  libraryPassive,
  myRentalsActive,
  myRentalsPassive,
  settingsActive,
  settingsPassive,
  wishlistActive,
  wishlistPassive
};

export const mapRouteToIcon = {
  [ROUTES.Library]: 'library',
  [ROUTES.Wishlist]: 'wishlist',
  [ROUTES.Addnew]: 'addNew',
  [ROUTES.Rentals]: 'myRentals',
  [ROUTES.Settings]: 'settings'
};

export const ACTIVE = 'Active';
export const PASSIVE = 'Passive';
