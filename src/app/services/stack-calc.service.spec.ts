import { TestBed } from '@angular/core/testing';

import { StackCalcService } from './stack-calc.service';

describe('StackCalcService', () => {
	let service: StackCalcService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(StackCalcService);
	});

	test.skip('should be created', () => {
		expect(service).toBeTruthy();
	});
});
