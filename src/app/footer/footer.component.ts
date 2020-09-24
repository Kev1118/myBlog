import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToTop(){
    let scrolltop = window.setInterval(() =>{
      let pos = window.pageYOffset;
      if(pos > 0){
        window.scrollTo(0,pos - 40);
      }
      else {
        window.clearInterval(scrolltop);
      }
    },16)
  }
}
