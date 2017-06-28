import { Stat } from './stat';

export interface Member {
  id: string;
  name: string;
  stats: Stat[];
  report_status: boolean;
  report?: 'string';
}
