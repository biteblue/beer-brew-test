import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {
  @ViewChild('accordBody') private content: ElementRef<HTMLElement>;
  @ViewChild('accordNav') private arrow: ElementRef<HTMLElement>;

  constructor() { }

  @Input() beer: any;
  ingredients = [];

  ngOnInit(): void {
    this.formatIngredients();
  }

  toggle(item: any) {
    let height = '0px', rotate = '';
    if(!item['inView']){
      height = 'auto'; 
      rotate = '-';
    }else {
      height = '0px';
      rotate = '';
    } 
    this.content.nativeElement.style.height = height;
    this.arrow.nativeElement.style.transform = `scaleY(${rotate}1)`;
    item['inView'] = !item['inView'];
  }
  
  formatIngredients(){
    for(const [k,v] of Object.entries(this.beer['ingredients'])){
      let tempArr = [];
      if(Array.isArray(v)){
        for(var i =0;i<v.length;i++) tempArr.push(v[i]['name']);
      }     
      this.ingredients.push({name: k, value: (tempArr.length > 0 ? tempArr.join(', ') : v)});
    }
  }

}
