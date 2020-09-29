import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'stack-calc',
		loadChildren: () =>
			import('./calculator/calculator.module').then((m) => m.CalculatorModule)
	},
	{
		path: '**',
		redirectTo: 'stack-calc'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
