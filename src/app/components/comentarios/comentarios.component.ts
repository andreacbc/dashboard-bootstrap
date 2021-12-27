import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  comentarios = [
    {
      img: 'assets/img/persona1.jpg',
      nombre: 'John Doe',
      titulo: 'Primera entrada',
      comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eaque sed adipisci aliquid ipsa alias, sunt commodi eligendi natus vel!'
    },
    {
      img: 'assets/img/persona2.jpg',
      nombre: 'Antoine Callis',
      titulo: 'Segunda entrada',
      comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eaque sed adipisci aliquid ipsa alias, sunt commodi eligendi natus vel!'
    },
    {
      img: 'assets/img/persona3.jpg',
      nombre: 'Andrea Briceno',
      titulo: 'Tercera entrada',
      comentario: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae eaque sed adipisci aliquid ipsa alias, sunt commodi eligendi natus vel!'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
