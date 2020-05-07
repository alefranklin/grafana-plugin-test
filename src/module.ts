import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions(builder => {
  return builder
    .addNumberInput({
      path: 'shapeSize',
      name: 'Size of the circle',
      description: 'This changes the size of the shape',
      defaultValue: 100,
    })
    .addRadio({
      path: 'shapeColor',
      defaultValue: 'blue',
      name: 'Shape color',
      settings: {
        options: [
          { value: 'blue', label: 'Blue' },
          { value: 'red', label: 'Red' },
          { value: 'green', label: 'Green' },
        ],
      },
    })
    .addRadio({
      path: 'shapeType',
      defaultValue: 'circle',
      name: 'Shape type',
      settings: {
        options: [
          { value: 'square', label: 'Square' },
          { value: 'circle', label: 'Circle' },
        ],
      },
    });
});
