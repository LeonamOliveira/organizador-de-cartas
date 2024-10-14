import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogEditProps } from './dialog.interface';
import { useState } from 'react';
import { CardGame } from './card.interface';

export function DialogEdit({ title, isOpen, onClose, card, onSubmit}: DialogEditProps) {
  const [quantidade, setQuantidade] = useState(card.quantidade);
  const [nome, setNome] = useState(card.nome);
  const [cardgame, setCardGame] = useState(card.cardgame);

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
          <Label htmlFor='cardgame'>CardGame</Label> // Dropdown =>
          <Input 
            id='cardgame'
            value={cardgame}
            onChange={(e) => setCardGame(e.target.value as CardGame)}
            />
        </div>
        <Button onClick={handleSubmit}>Salvar</Button>
      </DialogContent>
    </Dialog>
  )
}