export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
  constructor(
    public title: string,
    public id: string,
    public descr: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}
