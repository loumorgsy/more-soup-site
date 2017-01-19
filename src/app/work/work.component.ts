import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './projects.service';
import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {


    ngOnInit(): void { //onInit creates a new service each time the component is initialised
      this.getProjects();
    }



    projects: Project[]; // assign projects to the array

    // add constructor to define a private property // then register ProjectsService provider

    constructor(private projectsService: ProjectsService) {}

    getProjects(): void {
      this.projects = this.projectsService.getProjects();
    }




}
