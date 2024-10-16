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
import { Card, CardGame } from './interface/card.interface';
import { DialogEdit, DialogConfirm, DialogCadastrar } from './dialog';

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
    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
    const [isCadastrarDialogOpen, setIsCadastrarDialogOpen] = useState(false);

    const handleCadastrarCard = (quantidade: number, nome: string, cardgame: CardGame) => {
        const newCard: Card = {
            id: Date.now(),
            quantidade,
            nome, 
            cardgame
        }
        setCards([...cards, {...newCard}])
        setIsCadastrarDialogOpen(false)
    }

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

    const handleDeleteCard = (cardId: number) => {
        setCards(cards.filter(card => card.id !== cardId))
        closeConfirmDialog()
    }

    const openEditDialog = (card: Card) => {
        setSelectedCard(card);
        setIsDialogOpen(true)
    }

    const closeDialog = () => {
        setIsDialogOpen(false);
        setSelectedCard(null);
    }

    const openConfirmDialog = (card: Card) => {
        setSelectedCard(card);
        setIsConfirmDialogOpen(true);
    }

    const closeConfirmDialog = () => {
        setIsConfirmDialogOpen(false);
        setSelectedCard(null);
    }

    const handleDialogSubmit = (quantidade: number, nome: string, cardgame: CardGame) => {
        if (selectedCard) {
            handleEditCard(selectedCard.id, quantidade, nome, cardgame)
        }
    }
    return (
        <>
            <Button style={{backgroundColor:'green', color: 'white'}} onClick={() => setIsCadastrarDialogOpen(true)}>Cadastrar</Button>
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
                                                size='icon'
                                                onClick={() => openConfirmDialog(card)}>
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
                {selectedCard && (
                    <DialogConfirm
                        title='Excluir Carta'
                        isOpen={isConfirmDialogOpen}
                        onClose={closeConfirmDialog}
                        onConfirm={() => handleDeleteCard(selectedCard.id)}
                    >
                        <p>Deseja excluir a carta {selectedCard.nome} com quantidade {selectedCard.quantidade}?</p>
                    </DialogConfirm>
                )}
                <DialogCadastrar 
                    title='Cadastrar Carta'
                    isOpen={isCadastrarDialogOpen}
                    onClose={() => setIsCadastrarDialogOpen(false)}
                    onSubmit={handleCadastrarCard}
                />
        </>
    )
}