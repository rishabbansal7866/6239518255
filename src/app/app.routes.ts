import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { StudentListComponent } from './student-list/student-list.component';

export const routes: Routes = [{path: 'user', component: UserListComponent}, {path: 'student', component: StudentListComponent}]