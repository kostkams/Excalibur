import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {UserRegistrationDialogComponent} from './dialog/user-registration-dialog.component';
import {UserRegistrationViewModel} from './dialog/user-registration-dialog.view-model';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.css']
})
export class UserRegistrationComponent implements AfterViewChecked {
  constructor(private changeDetector: ChangeDetectorRef,
              public dialog: MatDialog) {}

  onRegister() {
    const dialogRef = this.dialog.open(UserRegistrationDialogComponent,{
      autoFocus: true,
      disableClose: true,
      width: '600px',
      data: new UserRegistrationViewModel(),
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  ngAfterViewChecked(): void {
    this.changeDetector.detectChanges();
  }
}
