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

	handleSubstraction(value: string): string {
		const valuesToSubstract = value.replace(' ', '').split('-');
		const valuesAsNumberToSubstract = valuesToSubstract.map(
			(val: string) => +val
		);

		// initialValue have to be set as first array element
		const initialValue = valuesAsNumberToSubstract[0];

		// then we remove first array element before substracting every values
		return valuesAsNumberToSubstract
			.slice(1)
			.reduce((acc, cur) => acc - cur, initialValue)
			.toString();
	}
}
