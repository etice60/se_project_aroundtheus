class Section {
  constructor({ renderer, items }, containerSelector) {
    console.log(items);
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    console.log(this._items);
    this._items.forEach(this._renderer);
  }

  addItem(element) {
    this._container.prepend(element);
  }
}

export default Section;
