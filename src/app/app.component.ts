import { Component } from '@angular/core';
import { ServerService } from './server.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  getres;
  offers;
 
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

}
