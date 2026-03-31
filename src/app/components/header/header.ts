import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatToolbar} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [MatCardModule, MatToolbar, MatIconModule, MatMenuModule, MatButton],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
