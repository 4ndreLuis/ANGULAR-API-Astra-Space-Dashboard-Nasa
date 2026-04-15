import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodCardComponent } from '../../components/apod-card/apod-card';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ApodCardComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
})
export class DashboardComponent {}
