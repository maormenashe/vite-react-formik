import * as React from "react";

type TextErrorProps = React.PropsWithChildren;

const TextError: React.FunctionComponent<TextErrorProps> = ({ children }) => {
  return <div className="error">{children}</div>;
};

export default TextError;
