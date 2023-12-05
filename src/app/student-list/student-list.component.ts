import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2 class="custom">
      student-list works!
    </h2>
  `,
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

}
