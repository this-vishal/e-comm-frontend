import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products' // Replace with your API endpoint

  constructor (private http: HttpClient) {}

  getProducts (): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
  }

  getProductById (id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<any>(url)
  }
}
