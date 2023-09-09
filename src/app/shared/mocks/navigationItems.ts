import type IOptionItem from './models/mocks.model';

export const navigationItems: ReadonlyArray<IOptionItem & { materialIconName: string; }> = [
  {
    materialIconName: 'home',
    label: 'Início',
    value: '/'
  },
  {
    materialIconName: 'volunteer_activism',
    label: 'Serviços',
    value: '/services'
  },
  {
    materialIconName: 'info',
    label: 'Sobre',
    value: '/about'
  },
  {
    materialIconName: 'visibility',
    label: 'Transparência',
    value: '/transparency'
  },
  {
    materialIconName: 'description',
    label: 'Equipe e Documentações',
    value: '/team-and-documentation'
  }
];
