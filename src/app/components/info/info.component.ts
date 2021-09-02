import { Component, OnInit } from '@angular/core';
import information from 'src/app/json/info.json';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = information;
    console.log(this.data);    
  }

}
