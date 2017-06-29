import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../../../models/project';

@Component({
  selector: 'app-projects-list-item',
  templateUrl: './projects-list-item.component.html',
  styleUrls: ['./projects-list-item.component.css']
})
export class ProjectsListItemComponent implements OnInit {

  @Input() public data: Project;
  @Output() public remove = new EventEmitter<Project>();
  @Output() public archive = new EventEmitter<Project>();
  @Output() public reactivate = new EventEmitter<Project>();

  constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public getTotalHours(): number {
    return this.data.stats.reduce((total, elem) => {
      return total + elem.hours;
    }, 0);
  }

}
