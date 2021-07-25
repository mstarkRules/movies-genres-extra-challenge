interface HeaderProps {
  selectedGenre: GenreResponseProps;
}

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export function Header(props: HeaderProps) {
  return (
    <header>
      <span className="category">
        <span>Categoria: {props.selectedGenre.title} </span>
      </span>
    </header>
  );
}
