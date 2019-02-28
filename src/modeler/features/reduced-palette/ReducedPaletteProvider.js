import PaletteProvider from 'bpmn-js/lib/features/palette/PaletteProvider';


export default class ReducedPaletteProvider extends PaletteProvider {

  constructor(
    palette, create, elementFactory,
    spaceTool, lassoTool, handTool,
    globalConnect, translate) {

    super(
      palette, create, elementFactory,
      spaceTool, lassoTool, handTool,
      globalConnect, translate
    );

  }

  getPaletteEntries() {

    const {
      'hand-tool': hand,
      'space-tool': space,
      'create.participant-expanded': createParticipant,
      ...reducedTools
    } = super.getPaletteEntries();

    return reducedTools;
  }

}

ReducedPaletteProvider.$inject = PaletteProvider.$inject;