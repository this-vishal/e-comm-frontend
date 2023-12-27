import { Component, Input, OnInit } from '@angular/core'
import { ChildCardComponent } from '../child-card/child-card.component'
import { CommonModule } from '@angular/common'
import { ProductService } from '../../services/products/product.service'

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [ChildCardComponent, CommonModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent implements OnInit {
  // @Input() products: any[] | undefined
  response: any
  Products: any[] = []
  lengthRes: any
  lengthData: any
  paginationPages: number = 0
  startValue = 1
  endValue = 10
  numberArray: any[] | undefined
  pageVal: any | undefined
  activeValue: any | undefined
  currentVal: number = 0

  constructor (private _productService: ProductService) {}

  ngOnInit (): void {
    this._productService.getProductsLength().subscribe(data => {
      this.lengthRes = data
      this.lengthData = this.lengthRes?.products.length
      this.paginationPages = Math.ceil(this.lengthData / 12)
      this.startValue = 0
      this.endValue = this.paginationPages
      this.numberArray = Array.from(
        { length: this.endValue - this.startValue + 1 },
        (_, index) => index + this.startValue
      )
      this.activeValue = 1
    })
    this._productService.getProducts(12).subscribe(data => {
      this.response = data
      this.Products = this.response?.products
      console.log(this.Products, 'products')
    })
  }

  currentPageData (value: number = 0) {
    this.currentVal = this.activeValue
    if (value != 0) {
      this.currentVal = value - 1
    }
    this._productService
      .getProducts(12, this.currentVal * 12)
      .subscribe(data => {
        this.response = data
        this.Products = this.response?.products
        console.log(this.Products, 'products')
      })
  }

  incrByOne () {
    this.activeValue = this.activeValue + 1
    this.currentPageData()
  }

  decrByOne () {
    if (this.activeValue > 1) {
      this.activeValue = this.activeValue - 1
      this.currentPageData()
    }
  }
  // ngOnInit () {
  //   this.Products = this.products
  // }
}
