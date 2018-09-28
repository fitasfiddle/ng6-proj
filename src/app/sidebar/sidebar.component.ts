import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    //router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);
    router.events
    .pipe(filter(e => e instanceof NavigationEnd))
    .subscribe((e: NavigationEnd) => {
      this.currentUrl = e.url;
    });
    console.log(this.currentUrl);
  }

  ngOnInit() {
  }

}
