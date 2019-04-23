import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { MenuItem } from './menu-item-model';
import { style, state, transition,animate, trigger } from '@angular/animations';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html',
  animations:[
    trigger('menuItemAppeared', [
      state('ready', style({ opacity: 1 })),
      transition('void => ready', [
        style({opacity: 0, transform: 'translateY(-20px)'}),
        animate('300ms 0s ease-in-out')
      ])
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  menuItemState = 'ready'

  @Input() menuItem : MenuItem
  @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  //Componentes de ação
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
