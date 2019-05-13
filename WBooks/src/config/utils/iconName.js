import { ROUTES } from '../../constants/routes';

export const getIconName = routeName => {
  let iconName;
  switch (routeName) {
    case ROUTES.Library:
      iconName = 'library';
      break;
    case ROUTES.Settings:
      iconName = 'settings';
      break;
    case ROUTES.Wishlist:
      iconName = 'wishlist';
      break;
    case ROUTES.Rentals:
      iconName = 'myRentals';
      break;
    case ROUTES.Addnew:
      iconName = 'addNew';
      break;
    default:
      break;
  }
  return iconName;
};
