import { Component } from '@angular/core';
import { ServiceCandleService } from '../../Service/service-candle.service';
import { Observable } from 'rxjs';
import { Service } from '../../Model/Service';

@Component({
  selector: 'app-service',
  standalone: false,
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
 services$!: Observable<Service[]>;

  constructor(private serviceCandle: ServiceCandleService) {
    this.services$ = this.serviceCandle.getAllServices();
  }

  trackByTitle(_i: number, it: Service) {
    return it.title;
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'assets/images/placeholder.jpg';
  }
}
