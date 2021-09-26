import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil} from 'rxjs/operators';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit { 
  protected ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private http: HttpService) { }

  beers: any = [];

  ngOnInit(): void {
    this.getBeers();
  }

  getBeers(){
    this.http.getBeers()
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data) => {
          this.beers = data;
        }, (error) => {

        });
  }

}
