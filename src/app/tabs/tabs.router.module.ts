import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'AddBook',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/add-book/add-book.module').then(m => m.AddBookPageModule)
          }
        ]
      },
      {
        path: 'EditBook/:paramId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/add-book/add-book.module').then(m => m.AddBookPageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
      path: 'AddMovie',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/add-movie/add-movie.module').then(m => m.AddMoviePageModule)
          }
        ]
      },
      {
        path: 'EditMovie/:paramId',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/add-movie/add-movie.module').then(m => m.AddMoviePageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'AddGame',
          children: [
            {
              path: '',
              loadChildren: () =>
                import('../tab3/add-game/add-game.module').then(m => m.AddGamePageModule)
            }
          ]
        },
        {
          path: 'EditGame/:paramId',
            children: [
              {
                path: '',
                loadChildren: () =>
                  import('../tab3/add-game/add-game.module').then(m => m.AddGamePageModule)
              }
            ]
          },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
