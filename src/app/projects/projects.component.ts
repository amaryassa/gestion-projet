import {Component, OnDestroy, OnInit} from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit , OnDestroy{
  constructor(private router: Router) { }
  ngOnInit() {}
  ngOnDestroy() {}

}
