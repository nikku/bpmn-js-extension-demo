import Modeler from './modeler';

import PropertiesPanel from './properties-panel';

import reducedPaletteModule from './modeler/features/reduced-palette';
import reducedContextPadModule from './modeler/features/reduced-context-pad';

import customModdleExtension from './modeler/moddle/custom.json';

import {
  download
} from './util';

import diagramXML from './diagram.bpmn';

const $modelerContainer = document.querySelector('#modeler-container');
const $propertiesContainer = document.querySelector('#properties-container');
const $downloadButton = document.querySelector('#download-diagram');

const modeler = new Modeler({
  container: $modelerContainer,
  additionalModules: [
    reducedContextPadModule,
    reducedPaletteModule
  ],
  moddleExtensions: {
    custom: customModdleExtension
  },
  keyboard: {
    bindTo: document.body
  }
});

const propertiesPanel = new PropertiesPanel({
  container: $propertiesContainer,
  modeler
});

modeler.importXML(diagramXML);


$downloadButton.addEventListener('click', function() {

  modeler.saveXML({ format: true }, function(err, xml) {

    if (xml) {
      download(xml, 'diagram.bpmn', 'application/xml');
    }
  });
});