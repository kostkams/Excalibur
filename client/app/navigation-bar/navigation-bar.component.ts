import {AfterViewChecked, ChangeDetectorRef, Component} from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.css']
})
export class NavigationBarComponent implements AfterViewChecked {



  constructor(private changeDetector: ChangeDetectorRef) {
     }

  // This fixes: https://github.com/DavideViolante/Angular-Full-Stack/issues/105
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
}
