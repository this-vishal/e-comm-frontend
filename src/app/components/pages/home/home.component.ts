import { Component, OnInit } from '@angular/core'
import { CarouselComponent } from '../../carousel/carousel.component'
import { ProductService } from '../../../services/products/product.service'
import { CardContainerComponent } from '../../../shared/card-container/card-container.component'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, CardContainerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  response: any
  Products: any[] = []

  constructor (private _productService: ProductService) {}

  ngOnInit (): void {
    this._productService.getProducts().subscribe(data => {
      this.response = data
      this.Products = this.response?.products
      console.log(this.Products, 'products')
    })
  }
}
