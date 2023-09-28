import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  description:string = "Hello there! \n My Name is Dr. Sailendra Darbha, I'm a dentist by education developer by profession, building interfaces is my passion which led me on a wild self-taught coding journey."

  certs:any[] = [
    {
      date: 'June 26, 2017',
      heading: 'Frontend Nanodegree',
      logo: 'udacity-logo.png',
      uni: 'Udacity',
      cert: 'fe.png'
    },
    {
      date: 'June 16, 2018',
      heading: 'Learn & Understand Angular JS',
      logo: 'udemy-logo.png',
      uni: 'Udemy',
      cert: 'angularjs.png'
    },
    {
      date: 'June 12, 2018',
      heading: 'Responsive Web Design',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'rwd.png'
    },
    {
      date: 'Oct 2, 2018',
      heading: 'Building Web Apps in PHP',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'php.png'
    },
    {
      date: 'Feb 18, 2019',
      heading: 'Using Python to Access Web Data',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'python.png'
    },
    {
      date: 'Oct 8, 2018',
      heading: 'Intro to SQL',
      logo: 'coursera-logo.png',
      uni: 'Coursera',
      cert: 'sql.png'
    },
  ]
  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}
}