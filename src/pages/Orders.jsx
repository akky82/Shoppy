import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective,
  Resize, Sort, Filter, Page, Edit, ContextMenu, ExcelExport,
  PdfExport, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="rounded-3xl bg-white m-2 p-2 mt-24 md:m-10 md:p-10 dark:bg-gray-300">
      <Header
        category="Page"
        title="Orders"
      />
      <GridComponent
        id="gridcomp"
        dataSource={ ordersData }
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={ contextMenuItems }
        editSettings={ editing }
      >
        <ColumnsDirective>
          { ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={ [Resize, Sort, ContextMenu, Edit, Filter, Page, ExcelExport, PdfExport] } />
      </GridComponent>
    </div>
  );
};

export default Orders