class Queminos {
  #orders = []

  get orders() {
    return this.#orders
  }

  placeOrder(order) {
    this.#orders.push(order)
  }

  deliverOrder() {
    return this.hasOrders() ? this.#orders.shift() : false
  }

  upNext() {
    return this.hasOrders() && this.#orders.length > 1
      ? this.#orders[1]
      : this.#orders[0]
  }

  hasOrders() {
    return this.#orders.length ? true : false
  }
}

module.exports = Queminos
