import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}

const ColorPicker = () => {
  return (
    <div className="rounded-3xl bg-white m-2 p-2 mt-24 md:m-10 md:p-10">
      <Header
        category="App"
        title="Color Picker"
      />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Palette</p>
            <ColorPickerComponent
              id="inline palette"
              mode="Palette"
              inline
              modeSwitcher={ false }
              showButtons={ false }
              change={ change }
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline picker"
              mode="Picker"
              inline
              modeSwitcher={ false }
              showButtons={ false }
              change={ change }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker