// menu.model.ts

export interface MenuItem {
  title?: string;
  icon?: string;
  link?: string;
  color?: string;
  subtitle?: string; // Adicione esta linha para o subtitulo
  item?: string;
  hideFor?: string;
  expanded?: boolean;
  subMenu?: MenuItem[];
}

export type Menu = MenuItem[];
