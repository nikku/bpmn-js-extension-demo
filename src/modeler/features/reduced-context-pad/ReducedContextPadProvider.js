import ContextPadProvider from 'bpmn-js/lib/features/context-pad/ContextPadProvider';


export default class ReducedContextPadProvider extends ContextPadProvider {

  constructor(
    config, injector, eventBus,
    contextPad, modeling, elementFactory,
    connect, create, popupMenu,
    canvas, rules, translate) {

    super(
      config, injector, eventBus,
      contextPad, modeling, elementFactory,
      connect, create, popupMenu,
      canvas, rules, translate
    );

  }

  getContextPadEntries(element) {

    const {
      'replace': replace,
      'append.text-annotation': appendTextAnnotation,
      ...reducedTools
    } = super.getContextPadEntries(element);

    return reducedTools;
  }

}

ReducedContextPadProvider.$inject = ContextPadProvider.$inject;