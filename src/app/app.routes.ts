import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './extrapages/page404/page404.component';
import { CyptolandingComponent } from './cyptolanding/cyptolanding.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("./component/outer/outer.module").then((m) => m.OuterModule),
    },
    {
        path: "admin",
        component: LayoutComponent,
        loadChildren: () =>
            import("./component/admin/admin.module").then((m) => m.AdminModule),
    },
    {
        path: "main",
        component: LayoutComponent,
        loadChildren: () =>
            import("./pages/pages.module").then((m) => m.PagesModule),
        canActivate: [AuthGuard],
    },
    {
        path: "pages",
        loadChildren: () =>
            import("./extrapages/extrapages.module").then((m) => m.ExtrapagesModule),
        canActivate: [AuthGuard],
    },
    { path: "crypto-ico-landing", component: CyptolandingComponent },
    { path: "**", component: Page404Component },
];
