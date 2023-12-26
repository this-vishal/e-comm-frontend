import { Routes } from '@angular/router'
import { HomeComponent } from './components/pages/home/home.component'
import { DetailCardComponent } from './components/detail-card/detail-card.component'

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'product-detail/:id',
    component: DetailCardComponent
  }
]
