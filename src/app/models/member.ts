import { MemberStat } from './member-stat';

export interface Member {
  id: string;
  name: string;
  stats: MemberStat[];
  report_status: boolean;
  report?: 'string';
}
