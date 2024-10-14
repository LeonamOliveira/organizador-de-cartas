import { CardGame } from "./card.interface";

export interface DialogEditProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  card: {
    quantidade: number;
    nome: string;
    cardgame: CardGame
  };
  onSubmit: (quantidade: number, nome: string, cardgame: CardGame) => void;
  children?: React.ReactNode;
}