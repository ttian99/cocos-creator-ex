const { ccclass, property } = cc._decorator;

@ccclass
class LabelEx extends cc.Component {
  @property(String) fontFamily = 'Arial';

  onLoad() {
    this.label = this.node.getComponent(cc.Label);
    this.label.fontFamily = this.fontFamily;
  }
  start() {
  }
}

export default LabelEx;
