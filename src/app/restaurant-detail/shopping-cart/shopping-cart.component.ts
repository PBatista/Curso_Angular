import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart-service';
import { style, state, transition,animate, trigger, keyframes } from '@angular/animations';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  animations: [
    trigger('row', [
      state('ready', style({opacity:1})),
      transition('void => ready' , animate('300ms 0s ease-in', keyframes([
        style({opacity:0, transform: 'translateX(-30opx)', offset:0}),
        style({opacity:0.6, transform: 'translateX(10opx)', offset:0.6}),
        style({opacity:1, transform: 'translateX(0opx)', offset:1})
      ]))),
      transition('ready => void' , animate('300ms 0s ease-out', keyframes([
        style({opacity:1, transform: 'translateX(0opx)', offset:0}),
        style({opacity:0.4, transform: 'translateX(-10opx)', offset:0.4}),
        style({opacity:0, transform: 'translateX(30opx)', offset:1})
      ])))
    ])

  ]
})
export class ShoppingCartComponent implements OnInit {

  rowState = 'ready'

  constructor(private shoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartService.items
  }

  clear(){
    this.shoppingCartService.clear()
  }

  total(): number{
    return this.shoppingCartService.total()
  }

  removeItem(item: any) {
    this.shoppingCartService.removeItem(item)
  }

  addItem(item: any){
    this.shoppingCartService.addItem(item)
  }


}
