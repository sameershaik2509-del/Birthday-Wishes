import { Routes } from '@angular/router';
import { MessageComponent } from './features/message/message.component';
import { SurpriseComponent } from './features/surprise/surprise.component';
import { MemoryCardsComponent } from './features/memory-cards/memory-cards.component';

export const routes: Routes = [
    {path:'surprise', component : SurpriseComponent},
    {path:'message', component:MessageComponent},
    {path:'memory-cards', component: MemoryCardsComponent},
    {path:'', redirectTo:'surprise',pathMatch:'full'},
    {path:'**', redirectTo:'surprise'},
];
