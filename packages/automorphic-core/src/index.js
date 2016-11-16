import _ from 'lodash';
import EventEmitter from 'events';

export function defineProduct(handlePackage) {
}

export function defineWorker(execute) {
  return {
    uniqueId: _.uniqueId('worker-'),
    initializer,
    eventEmitter
  };
}

export class Builder {
  constructor() {
    this.workers = {};
    this.products = {};
  }

  registerWorker(Worker) {
    if (!Worker.__uniqueId) {
      Worker.__uniqueId = _.uniqueId('worker-');
    }

    const id = Worker.__uniqueId;

    if (!_.has(this.workers, id)) {
      this.workers[id] = new Worker(this);
    }

    return this.workers[id];
  }

  registerProduct(Product) {
    if (!Product.__uniqueId) {
      Product.__uniqueId = _.uniqueId('product-');
    }

    const id = Product.__uniqueId;

    if (!_.has(this.products, id)) {
      this.products[id] = new Product(this);
    }

    return this.products[id];
  }

  addPackages(...packages) {
    _.chain(packages)
      .flatten()
      .each(package => {
      })
      .value();
  }

  build() {
    const tasks = [];
  }
}
