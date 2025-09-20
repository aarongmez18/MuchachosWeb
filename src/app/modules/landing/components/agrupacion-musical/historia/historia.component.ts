import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.scss']
})
export class HistoriaComponent {

      constructor(private router: Router) {}
  
    navigateTo(url: string) {
      const [path, fragment] = url.split('#');
  
      this.router.navigate([path], { fragment: fragment }).then(() => {
       
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      });
    }

}
