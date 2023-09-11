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
    value: '/#services'
  },
  {
    materialIconName: 'info',
    label: 'Sobre',
    value: '/about'
  },
  {
    materialIconName: 'alternate_email',
    label: 'Contato',
    value: '/#contact'
  },
  {
    materialIconName: 'visibility',
    label: 'Transparência',
    value: '/transparency'
  }
];
