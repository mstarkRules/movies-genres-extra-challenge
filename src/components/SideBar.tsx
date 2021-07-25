import { Button } from "../components/Button";

import "../styles/sidebar.scss";

interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SidebarProps {
  genres: Array<GenreResponseProps>;
  clickButtonAction: (id: number) => void;
  selectedGenre: GenreResponseProps;
}

export function SideBar(props: SidebarProps) {
  console.log(props);
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.clickButtonAction(genre.id)}
            selected={props.selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
