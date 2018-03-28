import {NgModule} from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {MaterialModule} from '../../material.module';
import {UserRegistrationComponent} from './user-registration.component';
import {UserRegistrationDialogComponent} from './dialog/user-registration-dialog.component';
import {UserRegistrationService} from './user-registration.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    UserRegistrationComponent,
    UserRegistrationDialogComponent
  ],
  imports: [
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  exports: [
    UserRegistrationComponent,
  ],
  entryComponents: [
    UserRegistrationDialogComponent
  ],
  providers: [
    UserRegistrationService,
  ]
})
export class UserRegistrationModule {}
