import { Component, EventEmitter, Output } from '@angular/core';
import { Recomendacao } from '../recomendacao.model';

@Component({
  selector: 'app-recomendacao-inserir',
  templateUrl: './recomendacao-inserir.component.html',
  styleUrls: ['./recomendacao-inserir.component.css'],
})
export class RecomendacaoInserirComponent {
    @Output() recomendacaoInserida = new EventEmitter();
    texto: string;

    onRecomendacaoInserida() {
        const recomendacao: Recomendacao = {
        texto: this.texto,
        };
        this.recomendacaoInserida.emit(recomendacao);
    }
        
}