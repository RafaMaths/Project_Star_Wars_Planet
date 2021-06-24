import React from 'react';
import TableContext from './TableContext';

function TableProvider({ children }) {
  return (
    <TableContext.Provider
      value={ {/* ...state */ } }
    >
      { children }
    </TableContext.Provider>
  );
}

export default TableProvider;
