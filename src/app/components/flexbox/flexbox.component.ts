import { Component } from '@angular/core';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent {
  constructor(private notifierService: NotifierService) {}

  showSnackBar(typeNotifier:'error'|'success') {
    if (typeNotifier === 'success')
      this.notifierService.showNotification('資料已順利讀取完成！','OK', typeNotifier);
    else
      this.notifierService.showNotification('資料讀取失敗！','關閉', typeNotifier);
  }

  showCustomSnackBar(typeNotifier: 'error'|'success') {
    if (typeNotifier === 'success')
      this.notifierService.showCustomNotification('資料已順利讀取完成！','OK', typeNotifier);
    else
      this.notifierService.showCustomNotification('資料讀取失敗！','關閉', typeNotifier);
  }
}
