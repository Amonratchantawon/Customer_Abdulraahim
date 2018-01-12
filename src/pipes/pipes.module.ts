import { NgModule } from '@angular/core';
import { HighlightPipe } from './highlight/highlight';
import { FilterPipe } from './filter/filter';
@NgModule({
	declarations: [HighlightPipe,
    FilterPipe],
	imports: [],
	exports: [HighlightPipe,
    FilterPipe]
})
export class PipesModule {}
