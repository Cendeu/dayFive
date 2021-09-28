import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-other-orders',
  templateUrl: './all-other-orders.component.html',
  styleUrls: ['./all-other-orders.component.css']
})
export class AllOtherOrdersComponent implements OnInit {

  @Input() orderNum: number;

  constructor() { }

  ngOnInit(): void {
  }

}
