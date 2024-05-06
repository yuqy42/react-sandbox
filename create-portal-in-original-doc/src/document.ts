export class Document {
  nodeType = 11;
  ownerDocument = this;

  createElement(...args: any) {
    console.log("call createElement()", args);
    return {};
  };

  addEventListener() {};
  removeChild() {};
  appendChild(...args: any) {
    console.log("call appendChild()", args);
  };
}
