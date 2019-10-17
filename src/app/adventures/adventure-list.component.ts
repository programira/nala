import { Component, OnInit } from '@angular/core';
import { IAdventure } from './adventure';
import { AdventureService } from './adventure.service';

@Component({
	selector: 'adventures',
	templateUrl: './adventure-list.component.html'
})
export class AdventureListComponent implements OnInit {
	pageTitle: string = `Nala's adventures`;
	errorMessage: string;
	adventures: IAdventure[] = [];
	constructor(private adventureService: AdventureService) {

	}
	ngOnInit(): void {
		// console.log('In OnInit');
		// this.adventures = this.adventureService.getAdventures(); before we added api, we changed the adventure service to return Observable
		this.adventureService.getAdventures().subscribe({
			next: adventures => {
				this.adventures = adventures
				// here we can add more functionality 
			},
			error: err => this.errorMessage = err
		});
	}
}