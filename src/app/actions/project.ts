import { Action } from '@ngrx/store';
import { Project } from '../models/project';

export const ADD = '[Project] Add';
export const REMOVE = '[Project] Remove';
export const ARCHIVE = '[Project] Archive';
export const REACTIVATE = '[Project] Reactivate';

export class AddAction implements Action {
  public readonly type = ADD;

  constructor(public payload: Project) {
    //
  }
}

// tslint:disable-next-line:max-classes-per-file
export class RemoveAction implements Action {
  public readonly type = REMOVE;

  constructor(public payload: string) {
    //
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ArchiveAction implements Action {
  public readonly type = ARCHIVE;

  constructor(public payload: string) {
    //
  }
}

// tslint:disable-next-line:max-classes-per-file
export class ReactivateAction implements Action {
  public readonly type = REACTIVATE;

  constructor(public payload: string) {
    //
  }

}
export type Actions
  = AddAction
  | RemoveAction
  | ReactivateAction
  | ArchiveAction;
