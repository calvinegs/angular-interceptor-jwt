import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifierComponent } from '../components/notifier/notifier.component';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {

  constructor( private snackBar: MatSnackBar) { }

  showNotification(displayMessage: string, buttonText: string, messageType: 'error' | 'success') {
    this.snackBar.open(displayMessage, buttonText, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: messageType
    })
  }

  showCustomNotification(displayMessage: string, buttonText: string, messageType: 'error' | 'success') {
    this.snackBar.openFromComponent(NotifierComponent, {
      data: {
        message: displayMessage,
        buttonText: buttonText,
        messageType: messageType
      },
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [messageType]
    })
  };
}