import React, { ReactNode } from 'react';
import { createPortal } from "react-dom";

class Node {
  name = "Original Node";

  addEventListener(...args: any) {
    console.log("addEventListener() called", args);
  };
  appendChild(...args: any) {
    console.log("appendChild() called", args);
  };
  removeChild(...args: any) {
    console.log("removeChild() called", args);
  };
};

class Document extends Node {
  nodeType = 11;
  ownerDocument = this;

  createElement(...args: any) {
    console.log("createElement() called", args);
    return new Node();
  };
}

const Portal = ({ children }: { children?: ReactNode }) => {
  const doc = new Document();
  console.log(children);

  return (<>
    {createPortal(children, doc)}
  </>);
}

export default Portal;
