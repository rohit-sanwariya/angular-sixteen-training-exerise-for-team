import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ProductsService } from 'src/app/products.service';
import { Observable } from 'rxjs';
import {MatCardModule} from '@angular/material/card'
import { IProduct } from 'src/app/iproduct';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MatCardModule,NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  _service = inject(ProductsService);
  products$:Observable<Array<IProduct>> = this._service.getProducts();

}
