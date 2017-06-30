import { Member } from './member';
import { Manager } from './manager';
import { ProjectStat } from './project-stat';
export interface Project {
  id: string;
  name: string;
  desc: string;
  active_status: boolean;
  creator_id: string;
  stats?: ProjectStat[];
}
