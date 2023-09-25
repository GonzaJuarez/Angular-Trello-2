import {Component, OnInit} from '@angular/core';
import {Card} from "../Card";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
 column: boolean = true;
  ngOnInit() {

  }

  setTarjeta(card: Card){
    return card;
  }
}
