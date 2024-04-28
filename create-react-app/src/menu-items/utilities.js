// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const utilities = {
  id: 'utilities',
  title: 'Utilities',
  type: 'group',
  children: [
    {
      id: 'util-typography',
      title: 'Clientes',
      type: 'item',
      url: '/utils/clientes',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'util-color',
      title: 'Menús',
      type: 'item',
      url: '/utils/menus',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'util-shadow',
      title: 'Encuestas',
      type: 'item',
      url: '/utils/encuestas',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
    // ,
    // {
    //   id: 'icons',
    //   title: 'Icons',
    //   type: 'collapse',
    //   icon: icons.IconWindmill,
    //   children: [
    //     {
    //       id: 'tabler-icons',
    //       title: 'Tabler Icons',
    //       type: 'item',
    //       url: '/icons/tabler-icons',
    //       breadcrumbs: false
    //     },
    //     {
    //       id: 'material-icons',
    //       title: 'Material Icons',
    //       type: 'item',
    //       external: true,
    //       target: '_blank',
    //       url: 'https://mui.com/material-ui/material-icons/',
    //       breadcrumbs: false
    //     }
    //   ]
    // }
  ]
};

export default utilities;
