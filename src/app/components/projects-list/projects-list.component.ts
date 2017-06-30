import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {

  @Input() public items;

  constructor() {
    //
  }

  public ngOnInit() {
    //
  }

  public onArchiveAction() {
    //
  }

  public onActivateAction() {
    //
  }

  public onRemoveAction() {
    //
  }

}
