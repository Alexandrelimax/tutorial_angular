import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../interfaces/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {

  @Input() product: Product | undefined;

  @Output() notify:EventEmitter<any> = new EventEmitter()

  handle(){
    this.notify.emit()
  }
}
