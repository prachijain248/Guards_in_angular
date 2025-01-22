import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

projects = [
  {id: 1, name:'Project Alpha'},
  {id: 2, name:'Project Beta'},
  {id: 3, name:'Project Gamma'},
]

}
