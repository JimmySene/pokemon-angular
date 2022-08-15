import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  pokemons: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon | undefined;

  ngOnInit() {
    console.table(this.pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }

  searchPokemon(pokemonId: string) {
    this.pokemonSelected = this.pokemons[+pokemonId];
  }
}
