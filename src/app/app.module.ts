import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GreetingsPipePipe } from './greetings-pipe.pipe';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SizerComponent } from './sizer/sizer.component';
import { FormsModule } from '@angular/forms'
import { HighlightDirective } from './highlight.directive';
import { LogService } from './log.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ParentComponent,
    ChildComponent,
    GreetingsPipePipe,
    ItemDetailsComponent,
    SizerComponent,
    HighlightDirective,
    FirstComponent,
    SecondComponent,
    ChildAComponent,
    ChildBComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
