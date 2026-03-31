import { Component } from '@angular/core';
import {Header} from '../../components/header/header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-page-layout',
  imports: [
    Header,
    RouterOutlet
  ],
  templateUrl: './page-layout.html',
  styleUrl: './page-layout.scss',
})
export class PageLayout {

}
