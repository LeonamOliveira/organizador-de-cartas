import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  IDialogConfirmEdit,
  IDialogEditProps,
  IDialogCadastrar,
} from "./interface/dialog.interface";
import { useState } from "react";
import { CardGame } from "./interface/card.interface";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DialogEdit({
  title,
  isOpen,
  onClose,
  card,
  onSubmit,
}: IDialogEditProps) {
  const [quantidade, setQuantidade] = useState(card?.quantidade || 0);
  const [nome, setNome] = useState(card?.nome || "");
  const [cardgame, setCardGame] = useState(card?.cardgame || CardGame.YuGiOh);
  const [qualidade, setQualidade] = useState(card?.qualidade || "NM");
  const [edicao, setEdicao] = useState(card?.edicao || "");

  const handleSubmit = () => {
    onSubmit(quantidade, nome, cardgame, qualidade, edicao);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor="quantidade">Quantidade</Label>
          <Input
            id="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            type="number"
          />
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Label htmlFor="cardgame">CardGame</Label>
          <p>{cardgame}</p>
          <Label htmlFor="edicao">Edição</Label>
          <Input
            id="edicao"
            value={edicao}
            onChange={(e) => setEdicao(e.target.value)}
          />
          <Label htmlFor="qualidade">Qualidade</Label>
          <Input
            id="qualidade"
            value={qualidade}
            onChange={(e) => setQualidade(e.target.value)}
          />
        </div>
        <Button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={handleSubmit}
        >
          Salvar
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export const DialogConfirm: React.FC<IDialogConfirmEdit> = ({
  title,
  isOpen,
  onClose,
  onConfirm,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Button variant="destructive" onClick={onConfirm}>
          Excluir
        </Button>
        <Button onClick={onClose}>Cancelar</Button>
      </DialogContent>
    </Dialog>
  );
};

export const DialogCadastrar: React.FC<IDialogCadastrar> = ({
  title,
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [quantidade, setQuantidade] = useState(1);
  const [nome, setNome] = useState("");
  const [cardgame, setCardGame] = useState(CardGame.YuGiOh);
  const [qualidade, setQualidade] = useState("");
  const [edicao, setEdicao] = useState("");

  const handleSubmit = () => {
    if (!nome || !cardgame) {
      alert("Por favor, insira todos os campos!");
      return;
    }
    onSubmit(quantidade, nome, cardgame, qualidade, edicao);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div>
          <Label htmlFor="quantidade">Quantidade</Label>
          <Input
            id="quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            type="number"
          />
          <Label htmlFor="nome">Nome</Label>
          <Input
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Label htmlFor="cardgame">CardGame</Label>
          <br />
          <DropdownMenu>
            <DropdownMenuTrigger>
              {cardgame || "Selecione um CardGame"}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Escolha o Cardgame</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setCardGame(CardGame.YuGiOh)}>
                Yu-Gi-Oh!
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCardGame(CardGame.Pokemon)}>
                Pokémon
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setCardGame(CardGame.OnePiece)}>
                One Piece
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <br />
          <Label>Qualidade</Label>
          <Input
            id="qualidade"
            value={qualidade}
            onChange={(e) => setQualidade(e.target.value)}
          />
          <Label>Edição</Label>
          <Input
            id="edicao"
            value={edicao}
            onChange={(e) => setEdicao(e.target.value)}
          />
        </div>
        <Button onClick={handleSubmit}>Cadastrar</Button>
      </DialogContent>
    </Dialog>
  );
};
