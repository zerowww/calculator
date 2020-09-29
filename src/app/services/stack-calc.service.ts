import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StackCalcService {
	readonly input$: Subject<string> = new Subject<string>();

	constructor() {}
}
