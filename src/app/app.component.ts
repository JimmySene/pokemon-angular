import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Liste de Pokémons</h1>`,
  styles: []
})
export class AppComponent implements OnInit {
  pokemons = POKEMONS;

  ngOnInit() {
    console.table(this.pokemons);
    this.selectPokemon(this.pokemons[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
