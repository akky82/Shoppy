import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Search  } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="rounded-3xl bg-white m-2 p-2 mt-24 md:m-10 md:p-10">
      <Header
        category="Page"
        title="Employees"
      />
      <GridComponent
        dataSource={ employeesData }
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={ editing }
        toolbar={ toolbarOptions }
      >
        <ColumnsDirective>
          { employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={ [Search, Page] } />
      </GridComponent>
    </div>
  );
};

export default Employees;