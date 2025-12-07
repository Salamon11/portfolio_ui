import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  profileImage: string = 'assets/public/Salamon.JPG';
  ngOnInit() {}
  
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'https://salamon.tiiny.site';
    link.download = 'Salamon_Santhiyahapper_Resume.pdf';
    link.click();
  }

}
