import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent, Project } from '../project-card/project-card.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent, NavbarComponent, FooterComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'E-Commerce Microservices Platform',
      description: 'A scalable e-commerce platform built with microservices architecture using Spring Boot, implementing service discovery, API gateway, and distributed tracing.',
      technologies: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'MySQL'],
      githubLink: 'https://github.com',
      liveLink: 'https://demo.com'
    },
    {
      title: 'Task Management Application',
      description: 'Full-stack task management system with real-time updates, user authentication, and role-based access control.',
      technologies: ['Angular', 'Spring Boot', 'MongoDB', 'WebSocket'],
      githubLink: 'https://github.com',
      liveLink: 'https://demo.com'
    },
    // {
    //   title: 'Banking REST API',
    //   description: 'Secure RESTful API for banking operations with JWT authentication, transaction processing, and account management.',
    //   technologies: ['Java', 'Spring Security', 'PostgreSQL', 'JWT'],
    //   githubLink: 'https://github.com'
    // },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media metrics with interactive charts and real-time data visualization.',
      technologies: ['Angular', 'TypeScript', 'Chart.js', 'RxJS'],
      githubLink: 'https://github.com',
      liveLink: 'https://demo.com'
    },
    {
      title: 'Inventory Management System',
      description: 'Enterprise inventory management system with barcode scanning, stock alerts, and reporting features.',
      technologies: ['Spring Boot', 'Angular', 'MySQL', 'JasperReports'],
      githubLink: 'https://github.com'
    },
    {
      title: 'Weather Forecast App',
      description: 'Weather application consuming third-party APIs with location-based forecasts and interactive maps.',
      technologies: ['Angular', 'TypeScript', 'REST API', 'Leaflet'],
      githubLink: 'https://github.com',
      liveLink: 'https://demo.com'
    }
  ];

}
