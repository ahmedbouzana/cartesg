import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-schema',
  templateUrl: './schema.component.html',
  styleUrls: ['./schema.component.css']
})
export class SchemaComponent implements OnInit {

  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];
  tiles: Tile[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10000; i++) {
      this.tiles.push({
        text: `${i + 1}`,
        cols: 1,
        rows: 1,
        color: 'lightblue'
      });
    }
  }

}
