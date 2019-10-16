import { Component, OnInit } from '@angular/core';
import { IAdventure } from './adventure';
import { AdventureService } from './adventure.service';

@Component({
	selector: 'adventures',
	templateUrl: './adventure-list.component.html'
})
export class AdventureListComponent implements OnInit{
	pageTitle: string = `Nala's adventures`;
	adventures: IAdventure[] = [];
	constructor(private adventureService: AdventureService){

	}
	ngOnInit(): void {
		// console.log('In OnInit');
		this.adventures = this.adventureService.getAdventures();
	}
}