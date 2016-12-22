import React from 'react';
import {
  Navigator,
} from 'react-native';
import NavigatorProvider from './components/NavigatorProvider';

import Home from './pages/Home';

const initRoute = {
  component: Home,
};

export default class App extends React.Component {

  configScene = (route) => {
    if (route.sceneConfigs) {
      return route.sceneConfigs;
    }
    return Navigator.SceneConfigs.PushFromRight;
  };

  renderScene = (route, navigator) => {
    const Component = route.component;
    return (
      <NavigatorProvider navigator={navigator}>
        <Component {...route.params} />
      </NavigatorProvider>
    )
  };

  render() {
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