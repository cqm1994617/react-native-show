import { observable, action } from 'mobx';

class Store {
  @observable basinNum = 0;
  @observable appleNum = 0;
  @observable pineappleNum = 0;

  @action addBasin = () => {
    this.basinNum ++;
  };
  @action addApple = () => {
    this.appleNum ++;
  };
  @action addPineappleNum = () => {
    this.pineappleNum ++;
  };
  @action clear = () => {
    this.basinNum = 0;
    this.appleNum = 0;
    this.pineappleNum = 0;
  }
}

const store = new Store();

export default store;
