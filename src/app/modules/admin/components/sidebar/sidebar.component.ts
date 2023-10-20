import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [
    '../admin-dashboard/admin-dashboard.component.scss',
    './sidebar.component.scss',
  ],
})
export class SidebarComponent {
  constructor(private auth: AuthService) { }

  logout(): void {
    this.auth.logout();
  }
}
