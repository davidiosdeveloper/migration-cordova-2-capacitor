import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    standalone: false
})
export class AppHeaderComponent {

  @Input() title: string = '';
  @Input() showBackButton: boolean = false;
  @Input() defaultHref: string = '/home';

}
