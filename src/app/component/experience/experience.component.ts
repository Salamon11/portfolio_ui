import { Component } from '@angular/core';

interface Experience {
  position: string;
  company: string;
  duration: string;
  description: string;
  responsibilities: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      position: 'Junior Java Developer',
      company: 'TVM InfoTech Solutions Pvt Ltd',
      duration: 'Jul 2024 - Present',
      description: 'Developing and maintaining enterprise-level web applications using Spring Boot and Angular.',
      responsibilities: [
        'Designed and implemented RESTful APIs using Spring Boot with 99.9% uptime',
        'Built responsive single-page applications using Angular 15 with TypeScript',
        'Implemented microservices architecture for scalable solutions',
        'Collaborated with cross-functional teams in Agile environment',
        'Optimized database queries reducing response time by 40%',
        'Conducted code reviews and mentored junior developers'
      ]
    },
    {
      position: 'Full Stack Developer Intern',
      company: 'SD Pro Solutions',
      duration: 'Dec 2023 - May 2024',
      description: 'Contributed to the development of scalable, enterprise-level web applications by working across backend and frontend layers, focusing on building secure APIs, business logic, and performance-optimized solutions.',
      responsibilities: [
        'Designed and developed RESTful backend services using Java and Spring Boot following clean architecture principles',
        'Implemented business logic, validations, and exception handling for enterprise web applications',
        'Integrated third-party APIs and external services to extend application functionality',
        'Collaborated with frontend developers to ensure seamless API integration and data flow',
        'Wrote unit and integration tests using JUnit and Mockito, achieving approximately 85% code coverage',
        'Participated in Agile ceremonies including sprint planning, daily stand-ups, and code reviews',
        'Documented API endpoints and technical workflows using standard documentation practices',
        'Identified and fixed bugs, optimized queries, and improved overall application performance'
      ]

    }
  ];

}
