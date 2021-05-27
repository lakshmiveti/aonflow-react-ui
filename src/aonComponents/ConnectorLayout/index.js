import React from "react";
import "./style.scss";
import Outer from "./outer";
import Head from "./head";
import Body from "./body";

function ConnectorLayout({
  logoUrl,
  handler,
  connectionName,
  desc,
  buttonTitle,
  id,
  buttonHandler,
}) {
  return (
    <Outer>
      <Head {...{ logoUrl, handler, id }} />
      <Body {...{ connectionName, desc, buttonTitle, buttonHandler, id }} />
    </Outer>
  );
}

export default React.memo(ConnectorLayout);
