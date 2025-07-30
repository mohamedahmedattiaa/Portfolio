import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrls: ['./projects.css'],
  standalone:false
})
export class Projects{
  projects = [
    {
      title: 'Student Gate',
      description: 'A portal for students to manage grades, schedules, and notifications. Built with Angular and Firebase for real-time updates and secure authentication.',
      technologies:  ['Html','css','js','php','phpmyadmin','sql'],
      github: 'https://github.com/mohamedahmedattiaa/StudentGate'
    },
    {
      title: 'Library Management System',
      description: 'A complete system for librarians to manage books, users, and issue logs. Supports book search, return, and overdue alerts.',
      technologies: ['Java', 'Java swing'],
      github: 'https://github.com/mohamedahmedattiaa/LibraryMangmentSystem'
    }
  ];
}