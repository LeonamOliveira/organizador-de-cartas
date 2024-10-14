'use client'
import React, { useState } from 'react'
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
import { Card, CardGame } from './card.interface';
import { DialogEdit } from './dialog';

export function DataTable() {
    const [cards, setCards] = useState<Card[]>([{
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
    }])

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState<Card | null>(null);

    const handleEditCard = (cardId: number, newQuantity: number, newName: string, newCardgame: CardGame) => {
        console.log('Entrei')
        setCards(
            cards.map((card) => 
                card.id === cardId ? 
                {...card, quantidade: newQuantity, nome: newName, cardgame: newCardgame} 
                : card
            )
        )
        setIsDialogOpen(false);
    }

    const openEditDialog = (card: Card) => {
        setSelectedCard(card);
        setIsDialogOpen(true)
    }

    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedCard(null);
    }

    const handleDialogSubmit = (quantidade: number, nome: string, cardgame: CardGame) => {
        if (selectedCard) {
            handleEditCard(selectedCard.id, quantidade, nome, cardgame)
        }
    }
    return (
        <>
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
                                <TableRow key={card.id}>
                                    <TableCell>{card.quantidade}</TableCell>
                                    <TableCell>{card.cardgame}</TableCell>
                                    <TableCell>{card.nome}</TableCell>
                                    <TableCell>
                                        <div className='flex items-center gap-2'>
                                            <Button
                                                variant='ghost'
                                                size='icon'
                                                onClick={() => openEditDialog(card)}>
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
                {selectedCard && (
                    <DialogEdit 
                        title='Editar Carta'
                        isOpen={isDialogOpen}
                        onClose={closeDialog}
                        card={selectedCard}
                        onSubmit={handleDialogSubmit}
                    />
                )}
        </>
    )
}