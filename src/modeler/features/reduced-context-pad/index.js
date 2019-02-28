import ReducedContextPadProvider from './ReducedContextPadProvider';

import DefaultContextPadModule from 'bpmn-js/lib/features/palette';


export default {
  __depends__: [
    DefaultContextPadModule
  ],
  __init__: [ 'contextPadProvider' ],
  contextPadProvider: [ 'type', ReducedContextPadProvider ]
};