import { UserService } from '@tmp-shared/services';
import { Role } from '@tmp-shared/enums';
import {
  ViewContainerRef,
  TemplateRef,
  Directive,
  OnInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[tmpHasRole]',
})
export class HasRoleDirective implements OnInit {
  @Input('tmpHasRole') public roles?: Role[] | `${Role}`[];

  constructor(private templateRef: TemplateRef<HTMLElement>,
              private viewContainer: ViewContainerRef,
              private userService: UserService) {}

  public ngOnInit(): void {
    this.roles && this.userService.hasRole(this.roles)
      ? this.viewContainer.createEmbeddedView(this.templateRef)
      : this.viewContainer.clear();
  }
}
