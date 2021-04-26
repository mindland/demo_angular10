import { Injectable } from '@angular/core';
import {
  CanDeactivate
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/client/register/register.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivatedGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(component: RegisterComponent): boolean {
    const flat = component.canDeactivate();
    return flat ? flat : window.confirm('Bạn có muốn rời khỏi trang không?');
  }
}
