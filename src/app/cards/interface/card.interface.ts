export enum CardGame {
  Pokemon = "Pokémon",
  OnePiece = "One Piece",
  YuGiOh = "Yu-Gi-Oh!",
}

export interface Card {
  id: string;
  quantidade: number;
  nome: string;
  cardgame: CardGame;
  qualidade: string;
  edicao: string;
}
