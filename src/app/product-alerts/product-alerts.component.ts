import { Component, OnInit } from "@angular/core";
import { Input } from "@angular/core";
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: "app-product-alerts", // The selector identifies the component.
  templateUrl: "./product-alerts.component.html", // The template filename reference the HTML file.
  styleUrls: ["./product-alerts.component.css"] // The style filename reference the CSS file.
})
export class ProductAlertsComponent implements OnInit {

  // The @Input() decorator indicates that the property value passes in from the component's parent, the product list component.
  @Input() product; 

  @Output() notify = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
