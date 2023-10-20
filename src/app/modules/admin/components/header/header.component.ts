import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../admin-dashboard/admin-dashboard.component.scss',
    './header.component.scss',
  ],
})
export class HeaderComponent {
  constructor(private auth: AuthService) {

  }

  logout(): void {
    this.auth.logout();
  }
}
