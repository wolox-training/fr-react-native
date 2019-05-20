import { create } from 'apisauce';
import Reactotron from 'reactotron-react-native';
import Config from 'react-native-config';

const api = create({
  baseURL: 'https://wolox-training-rails.herokuapp.com/api/v1',
  timeout: 5000
});

api.addMonitor(Reactotron.apisauce);

export default api;
