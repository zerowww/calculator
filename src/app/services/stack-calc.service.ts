import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class StackCalcService {
	readonly input$: Subject<string> = new Subject<string>();

	constructor() {}

	handleAddition(value: string): string {
		const valuesToAdd = value.replace(' ', '').split('+');
		const valuesAsNumberToAdd = valuesToAdd.map((val: string) => +val);

		return valuesAsNumberToAdd.reduce((acc, cur) => acc + cur, 0).toString();
	}
}
