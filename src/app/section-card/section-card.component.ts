import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
@Component({
  selector: 'app-section-card',
  templateUrl: './section-card.component.html',
  styleUrls: ['./section-card.component.css']
})
export class SectionCardComponent implements OnInit {
  getres;
  offers = [];

  constructor(private serverService: ServerService){
    this.serverService.storeServers()
    .subscribe((response) => {
      this.getres = response.json()
      this.offers = this.getres.data
      console.log(this.getres);
    }
    ,(error) =>console.log(error)
    );

  }

  ngOnInit() {
  }

}
