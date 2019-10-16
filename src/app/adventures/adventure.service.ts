import { Injectable } from '@angular/core';
import { IAdventure } from './adventure';

@Injectable({
	providedIn:'root'
})
export class AdventureService {
	getAdventures(): IAdventure[] {
		return [
			{
				"adventureId": 1,
				"adventureTitle": "Sokolov kamen",
				"description": "Sokolov kamen je drugi po visini vrh na Suvoj planini (1523m)",
				"imageUrl": "assets/images/nala/adv1.jpg",
				"date": "6.10.2019."
			},
			{
				"adventureId": 2,
				"adventureTitle": "Prolom banja",
				"description": "Prolom Banja se nalazi u Južnoj Srbiji, na padinama planine Radan. Poznata je po svojoj lekovitoj Prolom vodi.",
				"imageUrl": "assets/images/nala/adv2.jpg",
				"date": "29.06.2019."
			},
			{
				"adventureId": 3,
				"adventureTitle": "Kopaonik",
				"description": "Kopaonik je najveći planinski masiv u Srbiji koji se pruža od severozapada ka jugoistoku dužinom od oko 75 km, dosežući u srednjem delu širinu od oko 40 km.",
				"imageUrl": "assets/images/nala/adv3.jpg",
				"date": "01.02.2019."
			},
			{
				"adventureId": 4,
				"adventureTitle": "Maglič",
				"description": "Maglič je srednjovekovna utvrda u ibarskoj klisuri, 20km južno od Kraljeva. Smešten je na vrhu brda. Maglič čini 8 kula povezanih bedemima",
				"imageUrl": "assets/images/nala/adv4.jpg",
				"date": "05.05.2019."
			},
			{
				"adventureId": 5,
				"adventureTitle": "Đavolja varoš",
				"description": "Đavolja Varoš je vrlo atraktivan prirodni fenomen koji se nalazi na jugu Srbije, oko 90 km jugozapadno od Niša. Čine je 202 kamene figure.",
				"imageUrl": "assets/images/nala/adv5.jpg",
				"date": "21.04.2018."
			}
		]
	}
}