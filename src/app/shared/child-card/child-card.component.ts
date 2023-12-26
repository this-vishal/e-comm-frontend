import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-child-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-card.component.html',
  styleUrl: './child-card.component.css'
})
export class ChildCardComponent implements OnInit {
  @Input() product: any | undefined
  Product: any | undefined
  title: any[] | undefined
  description: any[] | undefined
  discountPercentage: any[] | undefined
  image: any[] | undefined
  price: any[] | undefined
  rating: any[] | undefined

  constructor (private _router: Router) {}

  ngOnInit () {
    console.log(this.product)
    this.Product = this.product
    this.title = this.product?.title
  }
  navigateToTarget (id: string) {
    this._router.navigate(['/product-detail', id])
  }
}
