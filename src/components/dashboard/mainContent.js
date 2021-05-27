import React from "react";

import ListOfConnectors from "./listOfConnectors";

function MainContent() {
  return (
    <div className='main-container py-3 px-4'>
      <ListOfConnectors title='List of Connectors' />
    </div>
  );
}

export default React.memo(MainContent);
