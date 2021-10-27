// Code goes here!

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLElement;
  element: HTMLFormElement;

  constructor() {
    // will not be null and be of provided type
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // content gives a reference to html between template tags
    // method creates a copy of a Node or DocumentFragment from another document,
    // to be inserted into the current document later.
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    // Document fragment is a minimal Document object that has no parent
    this.element = importedNode.firstElementChild! as HTMLFormElement;

    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const input = new ProjectInput();
