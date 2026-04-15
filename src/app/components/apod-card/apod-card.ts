import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NasaService } from '../../core/service/nasa';

@Component({
  selector: 'app-apod-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apod-card.html',
  styleUrl: './apod-card.scss',
})
export class ApodCardComponent implements OnInit {
  public nasaService = inject(NasaService);
  public maxDate: string = '';
  public selectedDate = signal<string>('');

  ngOnInit(): void {
    this.maxDate = new Date().toISOString().split('T')[0];
    this.nasaService.getPhotoByDate();
  }

  onDateSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedDate.set(input.value);
  }

  searchByDate(): void {
    const date = this.selectedDate();
    if (date) {
      this.nasaService.getPhotoByDate(date);
    }
  }
}
