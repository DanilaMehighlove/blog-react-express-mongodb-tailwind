import { Model } from "mongoose";

export class DefaultModel<T extends {}> {
  private model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  find() {
    return this.model.find();
  }

  findById(id: string) {
    return this.model.findById(id);
  }

  create(value: T) {
    return this.model.create(value);
  }

  update(id: string, value: T) {
    return this.model.updateOne({_id: id}, value)
  }

  delete(id: string) {
    return this.model.deleteOne({_id: id});
  }
}