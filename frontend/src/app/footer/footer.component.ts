import { ErrorHandlingService } from '../services/error-handling.service';
import { HomeService } from '../services/home/home.service';
import { environment } from '../environments';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  logoUrl: string = environment.mediaUrl + 'logo/eterna-travel-co-logo.png';
}
