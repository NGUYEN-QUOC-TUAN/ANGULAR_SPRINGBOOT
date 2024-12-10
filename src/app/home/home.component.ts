import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true, // KHAI BÁO LÀ COMPONENT ĐỘC LẬP
  imports: [HeaderComponent, FooterComponent]
})
export class HomeComponent {

}
