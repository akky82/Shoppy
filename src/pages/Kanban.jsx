import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
  return (
    <div className="rounded-3xl bg-white m-2 p-2 mt-24 md:m-10 md:p-10">
      <Header
        category="App"
        title="Kanban Board"
      />
      <KanbanComponent
        id="kanban"
        dataSource={ kanbanData }
        cardSettings={{
          contentField: 'Summary',
          headerField: 'Id',
        }}
        keyField="Status"
      >
        <ColumnsDirective>
          { kanbanGrid.map((item, index) => 
            <ColumnDirective key={index} {...item} />
          ) }
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;