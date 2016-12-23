import React from 'react';
import {
  Alert,
  AppState,
  Navigator,
  BackAndroid,
} from 'react-native';
import NavigatorProvider from './components/NavigatorProvider';
import store from './store/store';
import Home from './pages/Home';

const initRoute = {
  component: Home,
};

export default class App extends React.Component {

  componentWillMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.backAndroid);
    this.lastAppState = AppState.currentState;
    AppState.addEventListener('change', this.onAppStateChange);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.backAndroid);
    AppState.removeEventListener('change', this.onAppStateChange);
  }

  backAndroid = () => {
    const navigator = this.refs.navigator.getCurrentRoutes();
    const length = navigator.length;
    if (length > 1) {
      this.refs.navigator.pop();
      return true;
    } else {
      return false;
    }
  };
  onAppStateChange = state => {
    this.lastAppState = state;
  };

  // 这是设置跳转场景的动画。默认为pushFromRight
  // 第一个参数route，为一个对象，里面有新页面的根组件、要传的参数等
  configScene = (route) => {
    if (route.sceneConfigs) {
      return route.sceneConfigs;
    }
    return Navigator.SceneConfigs.PushFromRight;
  };

  // 这是设置跳转页具体要渲染出什么东西
  // 第一个参数route，为一个对象，里面有新页面的根组件、要传的参数等
  // 第二个参数navigator为当前整个路由栈
  renderScene = (route, navigator) => {
    const Component = route.component;
    return (
      <NavigatorProvider navigator={navigator} store={store}>
        <Component {...route.params} />
      </NavigatorProvider>
    )
  };

  render() {
    // inittalRoute为要渲染的初始页
    return (
      <Navigator
        ref="navigator"
        initialRoute={initRoute}
        configureScene={this.configScene}
        renderScene={this.renderScene}
      />
    );
  }
}