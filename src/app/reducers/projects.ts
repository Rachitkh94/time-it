import { createSelector } from 'reselect';
import { Book } from '../models/book';
import * as projectActions from '../actions/project';
import { Project } from '../models/project';

export interface State {
  projects: Project[];
};

export const initialState: State = {
  projects: []
};

export function reducer(state = initialState, action: projectActions.Actions): State {
  switch (action.type) {
    case projectActions.ADD: {
      return {
        projects: [...state.projects, action.payload]
      };
    }

    case projectActions.REMOVE: {
      return {
        projects: state.projects.filter((project) => {
          if (project) {
            return !(project.id === action.payload);
          }
        })
      };
    }

    case projectActions.ARCHIVE: {
      return {
        projects: state.projects.map((project) => {
          if (project) {
            if (project.id === action.payload) {
              return Object.assign({}, project, { active_status: false });
            }
            return project;
          }
        })
      };
    }

    case projectActions.REACTIVATE: {
      return {
        projects: state.projects.map((project) => {
          if (project) {
            if (project.id === action.payload) {
              return Object.assign({}, project, { active_status: true });
            }
            return project;
          }
        })
      };
    }

    default: {
      return state;
    }
  }
}
