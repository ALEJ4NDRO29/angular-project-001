import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { OfficesService } from '../core';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class OfficesResolver implements Resolve<any> {

	constructor(
		private officesService: OfficesService,
		private router: Router,
	) { }


	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<any> {

		return this.officesService
			.getOne(route.params['slug'])
			.pipe(
				catchError((err) => 
				this.router.navigateByUrl('/')
			));
	}

}
