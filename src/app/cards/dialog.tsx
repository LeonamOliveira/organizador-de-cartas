import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { IDialogConfirmEdit, IDialogEditProps, IDialogCadastrar } from './dialog.interface';
import { useEffect, useState } from 'react';
import { CardGame } from './card.interface';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function DialogEdit({ title, isOpen, onClose, card, onSubmit}: IDialogEditProps) {
  const [quantidade, setQuantidade] = useState(card?.quantidade);
  const [nome, setNome] = useState(card?.nome);
  const [cardgame, setCardGame] = useState(card?.cardgame);

  const handleSubmit = () => {
    onSubmit(quantidade, nome, cardgame);
    onClose();
  }

  return(
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor='quantidade'>Quantidade</Label>
          <Input 
            id='quantidade'
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            type='number'
          />
          <Label htmlFor='nome'>Nome</Label>
          <Input 
            id='nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Label htmlFor='cardgame'>CardGame</Label>
          <p>{cardgame}</p>
        </div>
        <Button style={{backgroundColor: 'green', color: 'white'}} onClick={handleSubmit}>Salvar</Button>
      </DialogContent>
    </Dialog>
  )
}

export const DialogConfirm: React.FC<IDialogConfirmEdit> = ({
  title,
  isOpen,
  onClose,
  onConfirm,
  children
}) => {
  if(!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className='sm:max-w-[425px]'>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
      </DialogHeader>      
        <Button variant="destructive" onClick={onConfirm}>Excluir</Button>
        <Button onClick={onClose}>Cancelar</Button>
    </DialogContent>
  </Dialog>
  )
}



export const DialogCadastrar: React.FC<IDialogCadastrar> = ({ title, isOpen, onClose, onSubmit}) => {
  const [quantidade, setQuantidade] = useState(1);
  const [nome, setNome] = useState('');
  const [cardgame, setCardGame] = useState(CardGame.YuGiOh);

  const handleSubmit = () => {
    if(!nome || !cardgame) {
      alert('Por favor, insira todos os campos!')
      return;
    }
    onSubmit(quantidade, nome, cardgame);
    onClose();
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor='quantidade'>Quantidade</Label>
          <Input 
            id='quantidade'
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            type='number'
          />
          <Label htmlFor='nome'>Nome</Label>
          <Input 
            id='nome'
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Label htmlFor='cardgame'>CardGame</Label>
          <DropdownMenu>
          <DropdownMenuTrigger>{cardgame || 'Selecione um CardGame'}</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>CardGames</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setCardGame(CardGame.YuGiOh)}>Yu-Gi-Oh!</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCardGame(CardGame.Pokemon)}>Pokémon</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setCardGame(CardGame.OnePiece)}>One Piece</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Button onClick={handleSubmit}>Cadastrar</Button>
      </DialogContent>
    </Dialog>
  )
}

{/*  */}