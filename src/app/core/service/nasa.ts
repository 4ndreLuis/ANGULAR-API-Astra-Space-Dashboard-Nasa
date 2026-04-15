import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ApodData {
  title: string;
  explanation: string;
  url: string;
  hdurl?: string;
  date: string;
  media_type: string;
}

@Injectable({ providedIn: 'root' })
export class NasaService {
  private http = inject(HttpClient);
  private readonly API_KEY = environment.nasaApiKey;
  private readonly BASE_URL = 'https://api.nasa.gov/planetary/apod';

  readonly apod = signal<ApodData | null>(null);
  readonly loading = signal<boolean>(false);

  async getPhotoByDate(date?: string) {
    this.loading.set(true);
    this.apod.set(null);

    try {
      let url = `${this.BASE_URL}?api_key=${this.API_KEY}`;
      if (date) {
        url += `&date=${date}`;
      }

      const data = await firstValueFrom(this.http.get<ApodData>(url));

      this.apod.set(data);
    } catch (error) {
      this.apod.set(null);
      console.error(error);
    } finally {
      this.loading.set(false);
    }
  }
}
