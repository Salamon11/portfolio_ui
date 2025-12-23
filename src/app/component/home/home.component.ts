import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
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
    link.href = 'assets/resume/SALAMON_SANTHIYAHAPPER.pdf';
    link.download = 'SALAMON_SANTHIYAHAPPER.pdf';
    link.click();
  }
  showResme=false;

}
