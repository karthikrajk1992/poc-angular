import { Injectable} from  '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ServerService{
	constructor(private http: Http){}
	storeServers(server: any[]){
		return this.http.get('https://api.spini.co/v1/home/offers');
	}
}