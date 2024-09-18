import { columns, Cards } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Cards[]> {
    return [
        {
            id: '1231321',
            typeOfCard: 'Pokémon',
            name: 'Pikachu',
            quantity: 1
        }
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}