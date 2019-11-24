import { Component, OnInit } from '@angular/core';
import { OfficesService, TagsService } from '../core';

@Component({
	selector: 'app-offices-list',
	templateUrl: './offices.component.html',
	styleUrls: ['./offices.component.css']
})
export class OfficesListComponent implements OnInit {
	constructor(
		private officesService: OfficesService,
		private tagsService: TagsService
	) {}
	
	ngOnInit() {
		console.log('offices work!');
		// OfficesService.getall();

		console.log(this.officesService.getAll());
	}

}
