import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './work/projects.service';
import { Project } from './work/project';
import { PROJECTS } from './work/mock-projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProjectsService] //creates a fresh instance of the service everytime the component is created
})
export class AppComponent implements OnInit {

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
