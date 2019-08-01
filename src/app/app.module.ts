import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogComponent } from './blog/blog.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { ProfessionalDetailsComponent } from './professional-details/professional-details.component';
import { ParticularsComponent } from './particulars/particulars.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DescriptionComponent } from './description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ResumeComponent,
    PortfolioComponent,
    BlogComponent,
    ContactMeComponent,
    PageTitleComponent,
    ProfessionalDetailsComponent,
    ParticularsComponent,
    PersonalDetailsComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
