import {Component, effect, inject, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {SectionCard} from '../../components/section-card/section-card';
import {MatCard} from '@angular/material/card';
import {LocationService} from '../../services/location-service';
import {CityModel} from '../../models/city.model';
import {MatInput, MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {debounceTime, filter, switchMap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main-page',
  imports: [
    SectionCard,
    MatCard,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  private readonly locationService = inject(LocationService)

  searchControl = new FormControl<string>('');
  city = this.createCitySignal();


  constructor() {
    effect(() => {
        console.log(this.city()?.country);
    });
  }

  private createCitySignal(): Signal<CityModel | null> {
    return toSignal(this.searchControl.valueChanges.pipe(
      filter(value => !!value?.trim()),
      debounceTime(1200),
      switchMap(value => this.locationService.getCityData(value!))
    ), { initialValue: null })
  }
}
