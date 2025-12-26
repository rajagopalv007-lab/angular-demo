import { Routes } from "@angular/router";
import { PostsComponent } from "./posts/posts.component";
import { PropertySearchComponent } from "./property-search/property-search.component";
import { ReactiveformsComponent } from "./reactiveforms/reactiveforms.component";
import { MaterialDemoComponent } from "./material-demo/material-demo.component";

export const routes:Routes = [  
    {path:'posts',component:PostsComponent},
     { path:'properties',component:PropertySearchComponent},
     {path:'reactiveForms',component:ReactiveformsComponent},
     {path:'material',component:MaterialDemoComponent}
    
];

