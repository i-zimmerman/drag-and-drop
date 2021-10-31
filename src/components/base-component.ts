// Component Base Class
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  template: HTMLTemplateElement;
  hostElement: T;
  element: U;

  constructor(
    templateId: string,
    hostId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.template = document.getElementById(templateId)! as HTMLTemplateElement;

    this.hostElement = document.getElementById(hostId)! as T;

    // content gives a reference to html between template tags
    // method creates a copy of a Node or DocumentFragment from another document,
    // to be inserted into the current document later.
    const importedNode = document.importNode(this.template.content, true);

    this.element = importedNode.firstElementChild! as U;
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? "afterbegin" : "beforeend",
      this.element
    );
  }

  abstract configure(): void;
  abstract renderContent(): void;
}
