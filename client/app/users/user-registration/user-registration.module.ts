import {NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {MaterialModule} from '../../material.module';
import {UserRegistrationComponent} from './user-registration.component';
import {UserRegistrationDialogComponent} from './dialog/user-registration-dialog.component';

@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserRegistrationDialogComponent
  ],
  imports: [
    FormsModule,
    MaterialModule
  ],
  exports: [
    UserRegistrationComponent,
  ],
  entryComponents: [
    UserRegistrationDialogComponent
  ]
})
export class UserRegistrationModule {}
