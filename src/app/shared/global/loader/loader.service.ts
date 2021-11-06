import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { LoaderComponent } from './loader.component';
import { finalize, share } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { defer, NEVER } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private overlayRef?: OverlayRef = undefined;

  constructor(private readonly overlay: Overlay) {}

  public readonly spinner$ = defer(() => {
    this.show();
    return NEVER.pipe(
      finalize(() => {
        this.hide();
      }),
    );
  }).pipe(share());

  private show(): void {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });
    this.overlayRef.attach(new ComponentPortal(LoaderComponent));
  }

  private hide(): void {
    this.overlayRef?.detach();
    this.overlayRef = undefined;
  }
}
