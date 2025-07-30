import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
  standalone: false
})
export class Navbar implements OnInit {
  navitem = ['Home', 'Projects', 'Skills', 'About Me', 'Contact Us'];
  activeitem = 'Home';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const path = event.urlAfterRedirects.replace('/', '');
        this.activeitem = this.getNavItemFromPath(path);
      });
  }

  navigateTo(item: string) {
    this.activeitem = item;
    const route = this.getRouterLink(item);
    this.router.navigate([route]);
  }

  getRouterLink(item: string): string {
    return {
      'Home': 'home',
      'Projects': 'projects',
      'Skills': 'skills',
      'About Me': 'about-me',
      'Contact Us': 'contact-us'
    }[item] || '';
  }

  getNavItemFromPath(path: string): string {
    return {
      'home': 'Home',
      'projects': 'Projects',
      'skills': 'Skills',
      'about-me': 'About Me',
      'contact-us': 'Contact Us'
    }[path] || 'Home';
  }
}
