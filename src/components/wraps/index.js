import React from "react";

export function Name({ settings, children }) {
  return (
    <div className={"row name" + (settings ? " " + settings : "")}>
      {children}
    </div>
  );
}

export function Block({ settings, children }) {
  return (
    <div className={"block" + (settings ? " " + settings : "")}>
      {children}
    </div>
  );
}

export function Img({ source }) {
  return (
    <img src={ source } alt="" />
  );
}