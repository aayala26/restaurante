// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Parametros',
  caption: 'Parametros para el restaurante',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Usuarios',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'usuario',
          title: 'Usuarios',
          type: 'item',
          url: '/usuarios',
          icon: icons.IconTypography,
          breadcrumbs: false
        }
        // ,
        // {
        //   id: 'register3',
        //   title: 'Register',
        //   type: 'item',
        //   url: '/pages/register/register3',
        //   target: true
        // }
      ]
    }
  ]
};

export default pages;
