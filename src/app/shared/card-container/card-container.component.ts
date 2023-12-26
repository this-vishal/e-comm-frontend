import { Component, Input, OnInit } from '@angular/core'
import { ChildCardComponent } from '../child-card/child-card.component'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-card-container',
  standalone: true,
  imports: [ChildCardComponent, CommonModule],
  templateUrl: './card-container.component.html',
  styleUrl: './card-container.component.css'
})
export class CardContainerComponent implements OnInit {
  @Input() products: any[] | undefined

  Products: any[] | undefined
  ngOnInit () {
    this.Products = this.products
  }
}
