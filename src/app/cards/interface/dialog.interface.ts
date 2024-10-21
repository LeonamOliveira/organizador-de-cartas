import { CardGame } from "./card.interface";

export interface IDialogEditProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  card: {
    quantidade: number;
    nome: string;
    cardgame: CardGame;
    qualidade: string;
    edicao: string;
  };
  onSubmit: (
    quantidade: number,
    nome: string,
    cardgame: CardGame,
    qualidade: string,
    edicao: string,
  ) => void;
  children?: React.ReactNode;
}

export interface IDialogCadastrar {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (
    quantidade: number,
    nome: string,
    cardgame: CardGame,
    qualidade: string,
    edicao: string,
  ) => void;
  children?: React.ReactNode;
}

export interface IDialogConfirmEdit {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}
