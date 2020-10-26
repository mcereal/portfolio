import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public isMenuCollapsed = true;
  @HostListener('document:scroll')
  navbarCollapse() {
    let mainNav = document.getElementById('mainNav');
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      mainNav.classList.add('navbar-shrink');
    } else {
      mainNav.classList.remove('navbar-shrink');
    }
  }
  toAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }
  toPortfolio() {
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
  }
  toHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  }
}
