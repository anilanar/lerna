import PublishCommand from "./PublishCommand";

export default class BumpVersionCommand extends PublishCommand {
  initialize(callback) {
    super.initialize(callback);
  }

    // override execute command,
    // skipping commit-tag-npmpublish steps completely
  execute(callback) {
    try {
      if (!this.repository.isIndependent() && !this.flags.canary) {
        this.updateVersionInLernaJson();
      }
      this.updateUpdatedPackages();
    } catch (err) {
      callback(err);
      return;
    }
  }
}
