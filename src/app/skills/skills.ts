import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrls: ['./skills.css'],
  standalone: false,
})
export class Skills {
  technicalSkills = [
    { name: 'Angular', level: 40, icon: 'integration_instructions' },
    { name: 'Node.js', level: 60, icon: 'memory' },
    { name: 'MongoDB', level: 30, icon: 'dns' },
    { name: 'REST APIs', level: 50, icon: 'api' },
    { name: 'TypeScript', level: 12, icon: 'code' },
    { name: 'Java', level: 70, icon: 'code' },
    { name: 'C++', level: 60, icon: 'code' },
    { name: 'Python', level: 50, icon: 'code' },
  ];

  softSkills = [
    { name: 'Leadership',  icon: 'leaderboard' },
    { name: 'Time Management', icon: 'schedule' },
    { name: 'Work Under Pressure', icon: 'speed' },
    { name: 'Communication', icon: 'chat' },
  ];
}
