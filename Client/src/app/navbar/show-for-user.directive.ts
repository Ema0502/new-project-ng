import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { navBarUser } from './navbar-user.model';

@Directive({
  selector: '[appShowForUser]',
  standalone: true
})
export class ShowForUserDirective {

  user: navBarUser | null = null;
  
  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appShowForUser(condition: boolean) {
    if (this.isAdmin()) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
  }

  isAdmin(): boolean {
    const userJson = localStorage.getItem("user");
    if (userJson) this.user = JSON.parse(userJson) as navBarUser;
    return this.user?.role === 'admin';
  }
}