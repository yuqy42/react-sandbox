import React, { ReactNode }  from 'react';
import { Document } from "./document.ts";
import { createPortal } from "react-dom";

export const createPortalInDoc = ({ children }: { children: ReactNode }) => {
  const doc = new Document();

  return createPortal(children, doc);
}
