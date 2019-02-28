import ReducedPaletteProvider from './ReducedPaletteProvider';

import DefaultPaletteProviderModule from 'bpmn-js/lib/features/palette';


export default {
  __depends__: [
    DefaultPaletteProviderModule
  ],
  __init__: [ 'paletteProvider' ],
  paletteProvider: [ 'type', ReducedPaletteProvider ]
};