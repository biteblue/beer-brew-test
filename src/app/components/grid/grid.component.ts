import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  beers: any = [];
  sorts: any = [];
  sortStructure: any = {
    "abv": {
      whichWay: false,
      type: "number"
    },
    "name": {
      whichWay: false,
      type:"string"
    },
    "ph": {
      whichWay: false,
      type:"number"
    }
  };

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.getBeers();
    this.sorts = Object.keys(this.sortStructure);
    console.log(this.sortStructure['abv']);
  }


  getBeers() {
    this.http.getBeers()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((data: any) => {
        this.beers = data.slice(0,8);
      }, (error) => {

      });
  }

  sort(attribute: any) {
    if(this.sortStructure[attribute].type == 'string') this.beers = this.sortByString(this.beers, attribute);
    this.sortStructure[attribute].whichWay = !this.sortStructure[attribute].whichWay;
    this.beers = this.sortByNumber(this.beers, this.sortStructure[attribute].whichWay, attribute);
  }

  sortByNumber(arr: Array<any>, direction: boolean, attribute: number){
    return arr.sort((a, b) => {
      if(direction) return b[attribute] - a[attribute];            
      return a[attribute] - b[attribute];
    });
  }

  sortByString(arr: Array<any>, attribute: string){
    console.log(attribute);
    return arr.sort((a, b) => {
      if(a[attribute] < b[attribute]){
        return -1; 
      }   
      else if(a[attribute] > b[attribute]){
        return 1;
      }       
      return 0;
    });
  }
}
