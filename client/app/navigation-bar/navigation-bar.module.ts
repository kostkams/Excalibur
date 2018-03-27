import {NgModule} from '@angular/core';
import {NavigationBarComponent} from './navigation-bar.component';
import {MaterialModule} from '../material.module';

@NgModule({
  declarations: [
    NavigationBarComponent,
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    NavigationBarComponent,
  ]
})

export class NavigationBarModule {
}
