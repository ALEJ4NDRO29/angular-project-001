import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// @Injectable({
// 	providedIn: 'root'
// })

@Injectable()
export class OfficesService {

	constructor(
		private apiService: ApiService
	) {}

	getAll(): Observable<string> {
		return this.apiService.get('/offices/')
		.pipe(map(data => {
			debugger;
			return data
		}));
	}

}
