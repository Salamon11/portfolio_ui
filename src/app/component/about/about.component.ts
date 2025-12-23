import { trigger, transition, style, animate } from '@angular/animations';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
   animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AboutComponent {
  passage1:any="I'm Salamon Santhiyahapper P, a dedicated full-stack developer with 1 year of professional experience in building scalable and efficient web applications. My expertise lies in Java Spring Boot for backend development and Angular for creating dynamic, responsive frontends."
  passage2:any="Throughout my career, I've worked on various projects involving microservices architecture,RESTful API development, and modern frontend frameworks. I'm passionate about writing clean,maintainable code and continuously learning new technologies to improve my craft."
  passage3:any=" When I'm not coding, I enjoy contributing to open-source projects, reading tech blogs,and exploring new frameworks and tools that can enhance development workflows."
}
