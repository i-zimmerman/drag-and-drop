import { Project } from "../models/project";
import { ProjectStatus } from "../models/project";

export type Listener<T> = (items: T[]) => void;

export class State<T> {
  // can be accessed only from inheriting class
  protected listeners: Listener<T>[] = [];

  addListener(listenerFunc: Listener<T>) {
    this.listeners.push(listenerFunc);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();

    return this.instance;
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }

  addProject(title: string, descr: string, people: number) {
    const id = Math.random().toString();
    const project = new Project(title, id, descr, people, ProjectStatus.Active);

    this.projects.push(project);
    this.updateListeners();
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((project) => project.id === projectId);

    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }
  }
}

// import from this file multiple times
// will run only once thought
export const state = ProjectState.getInstance();
