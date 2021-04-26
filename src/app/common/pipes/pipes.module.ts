import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortCutPipe } from './short-cut.pipe';

@NgModule({
  declarations: [ShortCutPipe],
  imports: [CommonModule],
  exports: [ShortCutPipe],
})
export class PipesModule {}
