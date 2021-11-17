import { Component } from '@angular/core';

import '@arc-web/components/dist/components/container/arc-container.js';
import '@arc-web/components/dist/components/navbar/arc-navbar.js';
import '@arc-web/components/dist/components/sidebar/arc-sidebar.js';
import '@arc-web/components/dist/components/button/arc-button.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arc-angular-test';
}
