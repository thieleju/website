export class Scene {
  static sceneWidth;
  static sceneHeight;

  static setScene(width, height) {
    this.sceneWidth = width;
    this.sceneHeight = height;
  }

  static getSceneWidth() {
    return this.sceneWidth;
  }

  static getSceneHeight() {
    return this.sceneHeight;
  }
}
