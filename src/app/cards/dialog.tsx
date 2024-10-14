import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogEditProps } from './dialog.interface';
import { useState } from 'react';
import { CardGame } from './card.interface';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export function DialogEdit({ title, isOpen, onClose, card, onSubmit}: DialogEditProps) {
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

interface DialogConfirmProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode;
}

export const DialogConfirm: React.FC<DialogConfirmProps> = ({
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

{/* <DropdownMenu>
  <DropdownMenuTrigger>{cardgame || 'Selecione um CardGame'}</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>CardGames</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem onClick={() => setCardGame(CardGame.YuGiOh)}>Yu-Gi-Oh!</DropdownMenuItem>
    <DropdownMenuItem onClick={() => setCardGame(CardGame.Pokemon)}>Pokémon</DropdownMenuItem>
    <DropdownMenuItem onClick={() => setCardGame(CardGame.OnePiece)}>One Piece</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu> */}