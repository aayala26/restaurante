import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const Clientes = Loadable(lazy(() => import('views/utilities/Clientes')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));
const Usuarios = Loadable(lazy(() => import('views/servicios/Usuarios')));
const Menus = Loadable(lazy(() => import('views/utilities/Menus')));
const Encuestas = Loadable(lazy(() => import('views/utilities/Encuestas')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'usuarios',
      children: [
        {
          path: 'default',
          element: <Usuarios />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'Encuestas',
          element: <Encuestas />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'menus',
          element: <Menus />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'clientes',
          element: <Clientes />
        }
      ]
    },
    
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
