"use client";

import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaPen, FaTrashCan } from "react-icons/fa6";
import { Card, CardGame } from "./interface/card.interface";
import { DialogEdit, DialogConfirm, DialogCadastrar } from "./dialog";

export function DataTable() {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCards = localStorage.getItem("cards");
      if (storedCards) {
        try {
          setCards(JSON.parse(storedCards));
        } catch (err) {
          console.error("Erro ao carregar dados do localStorage:", err);
        }
      }
    }
  }, []);

  useEffect(() => {
    if (cards.length > 0) {
      localStorage.setItem("cards", JSON.stringify(cards));
    }
  }, [cards]);

  const handleAddCard = (
    quantidade: number,
    nome: string,
    cardgame: CardGame,
    qualidade: string,
    edicao: string,
  ) => {
    const newCard: Card = {
      id: uuidv4(),
      quantidade,
      nome,
      cardgame,
      qualidade,
      edicao,
    };
    setCards((prevCards) => [...prevCards, newCard]);
    setIsAddDialogOpen(false);
  };

  const handleEditCard = (
    cardId: string,
    quantidade: number,
    nome: string,
    cardgame: CardGame,
    qualidade: string,
    edicao: string,
  ) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId
          ? { ...card, quantidade, nome, cardgame, qualidade, edicao }
          : card,
      ),
    );
    setIsEditDialogOpen(false);
    setSelectedCard(null);
  };

  const handleDeleteCard = (cardId: string) => {
    setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
    setIsDeleteDialogOpen(false);
    setSelectedCard(null);
  };

  const openEditDialog = (card: Card) => {
    setSelectedCard(card);
    setIsEditDialogOpen(true);
  };

  const openDeleteDialog = (card: Card) => {
    setSelectedCard(card);
    setIsDeleteDialogOpen(true);
  };

  return (
    <>
      <Button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => setIsAddDialogOpen(true)}
      >
        Cadastrar
      </Button>
      <Table>
        <TableCaption>Lista de cartas</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>CardGame</TableHead>
            <TableHead>Edição</TableHead>
            <TableHead>Qualidade</TableHead>
            <TableHead>Quantidade</TableHead>
            <TableHead>Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cards.length > 0 ? (
            cards.map((card) => (
              <TableRow key={card.id}>
                <TableCell>{card.nome}</TableCell>
                <TableCell>{card.cardgame}</TableCell>
                <TableCell>{card.edicao}</TableCell>
                <TableCell>{card.qualidade}</TableCell>
                <TableCell>{card.quantidade}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openEditDialog(card)}
                    >
                      <FaPen />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => openDeleteDialog(card)}
                    >
                      <FaTrashCan />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className="text-center">
                Nenhum card cadastrado
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {selectedCard && isEditDialogOpen && (
        <DialogEdit
          title="Editar Carta"
          isOpen={isEditDialogOpen}
          onClose={() => {
            setIsEditDialogOpen(false);
            setSelectedCard(null);
          }}
          card={selectedCard}
          onSubmit={(quantidade, nome, cardgame, qualidade, edicao) =>
            handleEditCard(
              selectedCard.id,
              quantidade,
              nome,
              cardgame,
              qualidade,
              edicao,
            )
          }
        />
      )}

      {selectedCard && isDeleteDialogOpen && (
        <DialogConfirm
          title="Excluir Carta"
          isOpen={isDeleteDialogOpen}
          onClose={() => {
            setIsDeleteDialogOpen(false);
            setSelectedCard(null);
          }}
          onConfirm={() => handleDeleteCard(selectedCard.id)}
        >
          <p>
            Tem certeza que deseja excluir a carta {selectedCard.nome} com
            quantidade {selectedCard.quantidade}?
          </p>
        </DialogConfirm>
      )}

      {isAddDialogOpen && (
        <DialogCadastrar
          title="Cadastrar Carta"
          isOpen={isAddDialogOpen}
          onClose={() => setIsAddDialogOpen(false)}
          onSubmit={handleAddCard}
        />
      )}
    </>
  );
}
