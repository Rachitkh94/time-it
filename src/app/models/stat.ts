import { Project } from './project';

export interface Stat {
  project_id: string;
  project_name: string;
  overtime?: number;
  hours: number[];
}
