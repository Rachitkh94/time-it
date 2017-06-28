import { Project } from './project';

export interface Manager {
  id: string;
  name: string;
  projects: Project[];
}
