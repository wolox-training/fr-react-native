import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import tronsauce from 'reactotron-apisauce';

const reactotron = Reactotron.configure()
  .useReactNative()
  .use(reactotronRedux())
  .use(tronsauce())
  .connect();
export default reactotron;
