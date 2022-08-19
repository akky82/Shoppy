import React, { useState } from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { Day, Week, WorkWeek, Month, Agenda, ScheduleComponent, ViewsDirective,
  ViewDirective, DragAndDrop, Inject, Resize } from '@syncfusion/ej2-react-schedule';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

const PropertyPane = (props) => <div className="mt-5">{ props.children }</div>;

const Calendar = () => {
  const [scheduleObj, setScheduleObj] = useState();
  
  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    arg.navigation.enable = true;
  };

  return (
    <div className="rounded-3xl bg-white m-2 p-2 mt-24 md:m-10 md:p-10 dark:bg-gray-300">
      <Header
        category="App"
        title="Calendar"
      />
      <ScheduleComponent
        height="650px"
        ref={ (schedule) => setScheduleObj(schedule) }
        selectedDate={ new Date(2021, 0, 10) }
        eventSettings={{ dataSource: scheduleData }}
        dragStart={ onDragStart }
      >
        <ViewsDirective>
          { ['Day', 'Week', 'WorkWeek', 'Month', 'Agenda'].map((item) =>
            <ViewDirective key={item} option={item} />) }
        </ViewsDirective>
        <Inject services={ [Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop] } />
      </ScheduleComponent>
      <PropertyPane>
        <table
          style={{ width: '100%', background: 'white' }}
        >
          <tbody>
            <tr style={{ height: '50px' }}>
              <td style={{ width: '100%' }}>
                <DatePickerComponent 
                  value={ new Date(2021, 0, 10) }
                  placeholder="Current Date"
                  change={ change }
                  showClearButton={ false }
                  floatLabelType="Always"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </PropertyPane>
    </div>
  );
};

export default Calendar;