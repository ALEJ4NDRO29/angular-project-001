import { Component, OnInit } from '@angular/core';
import { OfficesService, TagsService } from '../../core';

@Component({
	selector: 'app-offices-list',
	templateUrl: './offices-list.component.html',
	styleUrls: ['./offices-list.component.css']
})
export class OfficesListComponent implements OnInit {
	offices: any

	constructor(
		private officesService: OfficesService,
	) { }

	ngOnInit() {
		this.officesService.getAll().subscribe(data => {
			console.log(data);
			this.offices = data;
		});
	}

}
