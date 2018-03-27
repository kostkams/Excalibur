import {AfterViewChecked, ChangeDetectorRef, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { UserRegistrationViewModel} from './user-registration-dialog.view-model';

@Component({
  templateUrl: './user-registration-dialog.component.html',
  selector: 'app-user-registration-dialog',
  styleUrls: ['./user-registration-dialog.css']
})
export class UserRegistrationDialogComponent implements AfterViewChecked {
  hide = true;

  constructor(private changeDetector: ChangeDetectorRef,
              public dialogRef: MatDialogRef<UserRegistrationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: UserRegistrationViewModel) {
  }

  onNo() {
    this.dialogRef.close();
  }

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  get diagnostic() { return JSON.stringify(this.data); }
}
