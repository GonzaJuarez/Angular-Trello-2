import {Component, OnInit} from '@angular/core';
import {Column} from "../Column";

class ColumnService {
  getColumns() {
    
  }
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit{
  column: Column[] = [];

  constructor(private columnServices: ColumnService) { }
  ngOnInit() {
    this.getColumns();
  }

  getColumns(): void {
    this.columnServices.getColumns().subscribe((column: Column[]) => this.column = column);
  }

  createColumn(column: Column): void {
    function crearColumna() {
      
    }
  }
}
