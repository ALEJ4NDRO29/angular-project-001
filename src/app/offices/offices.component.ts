import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-offices',
	templateUrl: './offices.component.html',
	styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {

	constructor(
		private route: ActivatedRoute
	) { }

	office: string

	ngOnInit() {
		this.route.data.subscribe(
			data => {
				this.office = data.office[0];
			}
		);

	}

}
