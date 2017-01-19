import { Injectable } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './mock-projects';

@Injectable() //decorates class as Injectable
export class ProjectsService {

  //import mock projects and return it from the getprojects method

  getProjects(): Project[] {
    return PROJECTS;
  }

}
