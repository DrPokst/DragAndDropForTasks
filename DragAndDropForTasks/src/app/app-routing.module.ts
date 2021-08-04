import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DragAndDropComponent } from './DragAndDrop/drag-and-drop/drag-and-drop.component';

const routes: Routes = [
  { path: 'DragAndDrop', component: DragAndDropComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
