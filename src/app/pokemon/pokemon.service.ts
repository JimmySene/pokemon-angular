import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon';
import { Pokemon } from './pokemon';

// this service can have dependencies (as well as @Component, @Directive and @Pipe)
@Injectable()
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(id: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.id === id);
  }

  getPokemonTypeList(): string[] {
    return [
      'Plante',
      'Feu',
      'Eau',
      'Insecte',
      'Electrik',
      'Poison',
      'Fée',
      'Vol',
      'Combat',
      'Psy',
      'Ténèbre',
      'Acier',
      'Roche',
      'Sol',
      'Normal',
      'Spectre',
      'Dragon'
    ];
  }
}
