import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page.component';
import { RouterModule, Routes } from '@angular/router';

const EXPORTS_COMPONENT = [
  NotFoundPageComponent
  ]

const routes: Routes = [
  {
    path: '',
    component: NotFoundPageComponent,
    data: { title: 'Page Not Found' }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [NotFoundPageComponent],
  exports: [
    ...EXPORTS_COMPONENT
  ]
})
export class SharedUiNoFoundPagaModule {}
