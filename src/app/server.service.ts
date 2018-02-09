import { Injectable} from  '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService{
	constructor(private http: Http){}
	storeServers(){
		return this.http.get('https://stagingapi.spini.co/v1/home/offers');
	}
}