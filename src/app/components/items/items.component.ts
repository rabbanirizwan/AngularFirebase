import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import {Item} from '../../item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
 
  items : Item[];
  editState:boolean=false;
  itemTOEdit:Item;
  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.itemService.getItem().subscribe(items =>{
      this.items=items
    })
  }
  deleteItem(event,item:Item){
    this.clearState()
    console.log("delete")
    this.itemService.delete(item)
  }
  editItem(event,item:Item){
    this.editState=true;
    this.itemTOEdit=item;
  }
  clearState(){
    this.editState=false;
    this.itemTOEdit=null;
  }
  update(item:Item)
  {
    console.log(item)
    this.itemService.updateItem(item);
    this.clearState();
  }

}
