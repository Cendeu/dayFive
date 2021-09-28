import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
  firstOrders = [];
  restOrders = [];
  interval;
  orderNumber: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

  onStartWork() {
    this.interval = setInterval(() => {
      if (this.orderNumber < 6) {
      this.firstOrders.push(this.orderNumber);
      } else {
        this.restOrders.push(this.orderNumber);
      }
      this.orderNumber++;
    }, 2000);
  }

  onEndWork() {
    clearInterval(this.interval)
  }

}
