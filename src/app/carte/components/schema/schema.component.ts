import { Component, OnInit } from '@angular/core';

export interface Tile {
  tp: string;
  icon: string;
  color: string;
  cols: number;
  rows: number;
  text: string;
  position: number;
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
  unitCol = 1;
  unitRow = 1;
  et = 'et';
  lgCont = 'lgCont';
  lgDis = 'lgDis';
  inter = 'inter'
  ptInterDP = 'ptInterDP';
  ptInterAB = 'ptInterAB';
  ptSInterDP = 'ptSInterDP';
  ptSInterAB = 'ptSInterAB';

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 10000; i++) {
      this.tiles.push({
        tp: '',
        icon: 'point',
        cols: 1,
        rows: 1,
        color: 'white',
        text: `${i}`,
        position: i
      });
    }

    let cpt = 4;
    let tile = this.tiles[cpt];
    this.tiles[cpt] = this.getObject(tile, this.et);

    

    cpt = 5;
    tile = this.tiles[cpt];
    this.tiles[cpt] = this.getObject(tile, this.lgCont);
    cpt = 6;
    tile = this.tiles[cpt];
    this.tiles[cpt] = this.getObject(tile, this.lgCont);
    cpt = 7;
    tile = this.tiles[cpt];
    this.tiles[cpt] = this.getObject(tile, this.lgCont);
    cpt = 8;
    tile = this.tiles[cpt];
    this.tiles[cpt] = this.getObject(tile, this.lgCont);

    cpt = 20;
    tile = this.tiles[cpt];
    this.tiles[cpt] = this.getObject(tile, this.inter);

    cpt = 30;
    tile = this.tiles[cpt];
    this.tiles[cpt] = this.getObject(tile, this.ptInterAB);
  }

  getObject(tile: Tile, tp: string): Tile {
    let newTile: Tile = {
      tp: tp,
      icon:tile.icon,
      cols: -1,
      rows: -1,
      color: 'withe',
      text: '',
      position: tile.position
    }

    switch (tp) {

      case this.et:
        newTile.icon='device_hub';
        newTile.cols = this.unitCol;
        newTile.rows = this.unitRow;
        newTile.color = 'yellow';
        newTile.text = tile.tp;
        break;

      case this.lgCont:
      case this.lgDis:
        newTile.icon='square';
        newTile.cols = this.unitCol;
        newTile.rows = this.unitRow;
        newTile.color = 'orange';
        newTile.text = tile.tp;
        break;

      case this.inter:
        newTile.icon='device_hub';
        newTile.cols = this.unitCol * 3;
        newTile.rows = this.unitRow * 3;
        newTile.color = 'green';
        newTile.text = tile.tp;
        break;

      case this.ptInterDP:
      case this.ptInterAB:
      case this.ptSInterDP:
      case this.ptSInterAB:
        newTile.icon='arrow_drop_up';
        newTile.cols = this.unitCol * 5;
        newTile.rows = this.unitRow * 5;
        newTile.color = 'gray';
        newTile.text = tile.tp;
        break;

      default:
        break;
    }
    return newTile;
  }

}
