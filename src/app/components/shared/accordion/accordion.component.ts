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

}
