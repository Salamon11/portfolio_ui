import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Java', level: 90, category: 'Backend' },
    { name: 'Spring Boot', level: 85, category: 'Backend' },
    { name: 'Microservices', level: 80, category: 'Backend' },
    { name: 'REST API', level: 90, category: 'Backend' },
    { name: 'Angular', level: 85, category: 'Frontend' },
    { name: 'TypeScript', level: 80, category: 'Frontend' },
    { name: 'HTML/CSS', level: 90, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'MySQL', level: 75, category: 'Database' },
    { name: 'Oracle', level: 70, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' },
    // { name: 'Docker', level: 70, category: 'Tools' }
  ];
  
  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

}
