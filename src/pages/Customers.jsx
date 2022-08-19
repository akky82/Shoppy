import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Edit, Filter,
  Inject, Page, Selection, Sort, Toolbar } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
  const selectionSettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="rounded-3xl bg-white m-2 p-2 mt-24 md:m-10 md:p-10 dark:bg-gray-300">
      <Header 
        category="Page"
        title="Customers"
      />
      <GridComponent 
        dataSource={ customersData }
        enableHover={ false }
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        selectionSettings={ selectionSettings }
        tooldbar={ toolbarOptions }
        editSettings={ editing }
      >
        <ColumnsDirective>
          { customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={ [Edit, Filter, Page, Selection, Sort, Toolbar] } />
      </GridComponent>
    </div>
  );
};

export default Customers;