import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { NavbarComponent } from './components/navbar/navbar.component'
import { CarouselComponent } from './components/carousel/carousel.component'
import { CardContainerComponent } from './shared/card-container/card-container.component'
import { ProductService } from './services/products/product.service'
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './components/pages/home/home.component'
import { DetailCardComponent } from './components/detail-card/detail-card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    HomeComponent,
    HttpClientModule,
    DetailCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  title = 'frontend'
  response: any
  Products: any[] = []

  constructor (private _productService: ProductService) {}

  ngOnInit (): void {
    // this._productService.getProducts().subscribe(data => {
    //   this.response = data
    //   this.Products = this.response?.products
    //   console.log(this.Products, 'products')
    // })
  }
}
