import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  btnOnClick(){
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("active");
  }

}
