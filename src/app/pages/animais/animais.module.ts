import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimaisRoutingModule } from './animais-routing.module';
import { CartaoModule } from '../cartao/cartao.module';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';



@NgModule({
  declarations: [
    GradeFotosAnimaisComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CartaoModule
  ]
})
export class AnimaisModule { }
