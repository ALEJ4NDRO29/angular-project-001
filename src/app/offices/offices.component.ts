import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-offices',
	templateUrl: './offices.component.html',
	styleUrls: ['./offices.component.css']
})
export class OfficesComponent implements OnInit {
	office: string

	constructor(
		private route: ActivatedRoute
	) { }

	ngOnInit() {
		this.route.data.subscribe(
			data => {
				this.office = data.office[0];
			}
		);

	}

}
