import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../work/projects.service';
import { Project } from '../work/project';
import { PROJECTS } from '../work/mock-projects';
import { RouterModule, Routes }  from '@angular/router';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.css']
})
export class WorkDetailsComponent implements OnInit {




  ngOnInit(): void {

  }

}
