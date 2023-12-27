import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ProductService } from '../../services/products/product.service'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.css'
})
export class DetailCardComponent implements OnInit {
  Product: any | undefined
  productQty: number = 1
  productPrice: number | undefined
  productImage: string | undefined

  constructor (
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _router: Router
  ) {}
  ngOnInit (): void {
    this._route.params.subscribe(params => {
      const id = +params['id']
      this._productService.getProductById(id).subscribe(data => {
        console.log(data, 'data')
        this.Product = data
        this.productPrice = this.Product.price * this.productQty
        this.productImage = this.Product.images[0]
      })
    })
  }
  changeImage (value: number) {
    this.productImage = this.Product.images[value]
  }
  quantityChanged (value: number) {
    if (this.productQty + value < 1) {
      this.productQty = 1
    } else {
      this.productQty = this.productQty + value
    }
    this.productPrice = this.Product.price * this.productQty
  }

  goBack () {
    this._router.navigate([''])
  }
}
