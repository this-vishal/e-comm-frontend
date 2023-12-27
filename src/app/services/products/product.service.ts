import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products' // Replace with your API endpoint

  constructor (private http: HttpClient) {}

  getProducts (value: number, nextIndex: number = 0): Observable<any[]> {
    const urlWithLimit = `${this.apiUrl}?limit=${value}&skip=${nextIndex}`
    return this.http.get<any[]>(urlWithLimit)
  }
  getProductsLength (): Observable<any[]> {
    const urlWithLimit = `${this.apiUrl}?limit=${100}`
    return this.http.get<any[]>(urlWithLimit)
  }

  getProductById (id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<any>(url)
  }
}
