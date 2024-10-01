'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'
import { FaPen, FaTrashCan } from "react-icons/fa6";

enum CardGame{ 
    Pokemon = 'Pokémon',
    OnePiece = 'One Piece', 
    YuGiOh = 'Yu-Gi-Oh!'
}

interface Card {
    id: number;
    quantidade: number;
    nome: string;
    cardgame: CardGame;
}

function CardList() {
    const [cards, setCards] = useState<Card[]>([])

    const handleEditCard = (cardId: number, newQuantity: number, newName: string, newCardgame: CardGame) => {
        setCards(
            cards.map((card) => 
                card.id === cardId ? 
                {...card, quantidade: newQuantity, nome: newName, cardgame: newCardgame} 
                : card
            )
        )
    }
    
}

const cards = [
    {
        id: 8,
        quantidade: 1,
        cardgame: CardGame.YuGiOh,
        nome: 'Mago Negro'
    }, 
    {
        id: 7,
        quantidade: 3,
        cardgame: CardGame.Pokemon,
        nome: 'Pikachu'
    },
    {
        id: 12,
        quantidade: 2,
        cardgame: CardGame.OnePiece,
        nome: 'Monkey D. Luffy'
    }
]

export function DataTable() {
    return (
        <Table>
            <TableCaption>Lista de cartas</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[250px]'>Quantidade</TableHead>
                    <TableHead>CardGame</TableHead>
                    <TableHead>Nome</TableHead>
                    <TableHead>Ações</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    cards.length > 0 ? (
                        cards.map((card) => (
                            <TableRow key={card?.id}>
                                <TableCell>{card?.quantidade}</TableCell>
                                <TableCell>{card?.cardgame}</TableCell>
                                <TableCell>{card?.nome}</TableCell>
                                <TableCell>
                                    <div className='flex items-center gap-2'>
                                        {/* <Button
                                            variant='ghost'
                                            size='icon'
                                            onClick={() => handleEditCard(card.id, card.quantidade, card.nome, card.cardgame)}>
                                        </Button> */}
                                        <Button
                                            variant='ghost'
                                            size='icon'>
                                                <FaPen />
                                        </Button>
                                        <Button
                                            variant='ghost'
                                            size='icon'>
                                                <FaTrashCan />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell>
                                Não encontrado
                            </TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    )
}