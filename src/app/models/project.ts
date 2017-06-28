import { Member } from './member';
import { Manager } from './manager';
export interface Project {
  id: string;
  name: string;
  desc: string;
  members?: Member[];
  creator_id: string;
}
