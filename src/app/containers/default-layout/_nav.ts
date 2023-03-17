import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Admin',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Train',
        url: '/base/train-list'
      },
      {
        name: 'Seat',
        url: '/base/seat-list'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Cards',
        url: '/base/cards'
      },
      {
        name: 'Carousel',
        url: '/base/carousel'
      },
      {
        name: 'Collapse',
        url: '/base/collapse'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips'
      }
    ]
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
  {
    name: 'Users',
    url: '/user',
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Train',
        url: '/user/train'
      }
    ]
  }
];
