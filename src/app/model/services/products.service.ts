import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[]=[

    { id: 1, name: 'dracula', price: 10.0, description: 'dracula de Bram Stoker', image: '../dracula.png'},
    { id: 2, name: 'dracula', price: 10.0, description: 'dracula de Bram Stoker', image: '../dracula copy.png'},
    { id: 3, name: 'fantasma da opera', price: 15.5, description: 'fantasma da opera', image: '../fantasma.png'},
    { id: 4, name: 'culinaria', price: 6.0, description: 'livro de culinaria', image: '../culinaria.png'},
    { id: 5, name: 'manual', price: 10.0, description: 'manual mindset do pablo marçal', image: '../manual.png'},
    { id: 6, name: 'crepusculo', price: 10.0, description: 'amanhecer', image: '../crepusculo.png'},
    { id: 7, name: 'manifesto comunista', price: 10.0, description: 'manifesto', image: '../comunista.png'},
    { id: 8, name: 'sonhos', price: 10.0, description: 'livro dos sonhos', image: '../sonho.png'},
    { id: 9, name: 'dracula', price: 10.0, description: 'dracula de Bram Stoker', image: '../dracula copy 6.png'},
    { id: 10, name: 'dracula', price: 10.0, description: 'dracula de Bram Stoker', image: '../dracula copy 7.png'},
  ];

  getProducts(): Iproducts[]{
    return this.products;
  }
}
