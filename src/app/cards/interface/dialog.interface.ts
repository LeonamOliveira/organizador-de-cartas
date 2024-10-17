import { CardGame } from "./card.interface";

export interface IDialogEditProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  card: {
    quantidade: number;
    nome: string;
    cardgame: CardGame;
  };
  onSubmit: (quantidade: number, nome: string, cardgame: CardGame) => void;
  children?: React.ReactNode;
}

export interface IDialogCadastrar {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (quantidade: number, nome: string, cardgame: CardGame) => void;
  children?: React.ReactNode;
}

export interface IDialogConfirmEdit {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}
