import {Component} from '@angular/core';

import { PropertySearchComponent } from './property-search/property-search.component';
import { PostsComponent } from "./posts/posts.component";
import { RouterLinkWithHref, RouterOutlet } from "@angular/router";



@Component({
  selector: 'app-root',
  imports: [PropertySearchComponent, PostsComponent, RouterLinkWithHref, RouterOutlet],
  template: `
    <main>
<header class="brand-name">
<img src="/assets/logo.svg" alt="Logo" class="logo" />
</header>
<section class="content">
  <p>Hello. Welcome</p>
  <a [routerLink]="'/properties'">Buy and Sell Properties</a>
  <a [routerLink]="'/posts'">Read our Blog</a>
  <a [routerLink]="'/reactiveForms'">Reactive Forms</a>
  <a [routerLink]="'/material'">Material Demo</a>
  <router-outlet></router-outlet>
</section>
</main>
  `,
  styleUrls: ['./app.css'],
})
export class App {
  title = 'homes';
}
