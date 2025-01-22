import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-projects',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-projects.component.html',
  styleUrl: './edit-projects.component.scss'
})
export class EditProjectsComponent {
  projectData:string = "";
  isSaved = false;

  onSave(){
    this.isSaved = true;
    alert('Project Saved')
  }

  canDeactivate(): boolean | Observable<boolean> {
    if(!this.isSaved){
      return confirm('you have unsaved changes.Do you really want to leave?')
    }
    return true;
  }

}
