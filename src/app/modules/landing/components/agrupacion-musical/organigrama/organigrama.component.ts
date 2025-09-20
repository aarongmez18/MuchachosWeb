import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-organigrama',
  templateUrl: './organigrama.component.html',
  styleUrls: ['./organigrama.component.scss']
})
export class OrganigramaComponent {

        constructor(private router: Router) {}
    
      navigateTo(url: string) {
        const [path, fragment] = url.split('#');
    
        this.router.navigate([path], { fragment: fragment }).then(() => {
         
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        });
      }
  

}
