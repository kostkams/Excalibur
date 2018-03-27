import {NgModule} from '@angular/core';
import {NavigationBarComponent} from './navigation-bar.component';
import {MaterialModule} from '../material.module';
import {UserRegistrationModule} from '../users/user-registration/user-registration.module';

@NgModule({
  declarations: [
    NavigationBarComponent,
  ],
  imports: [
    MaterialModule,
    UserRegistrationModule,
  ],
  exports: [
    NavigationBarComponent,
  ]
})

export class NavigationBarModule {
}
