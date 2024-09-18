import { ColumnDef } from "@tanstack/react-table"

export type Cards = {
    id: string
    typeOfCard: 'Pokémon' | "Yu-Gi-Oh!" | "One Piece" 
    name: string 
    quantity: number
}

export const columns: ColumnDef<Cards>[] = [
    {
        accessorKey: "name",
        header: "Name"
    },
    {
        accessorKey: "typeOfCard",
        header: "CardGame"
    },
    {
        accessorKey: "quantity",
        header: "Quantidade"
    }
]