import { Injectable } from '@angular/core';
import { LoadingController, ToastController, AlertController, MenuController, Events } from '@ionic/angular';
import { LoadingOptions } from '@ionic/core';


@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  private isLoading: boolean = false;
  private loading: any;

  constructor(
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private menuCtrl: MenuController,
    private events: Events,
  ) { }

  async openLoading(text?: string, duration: number = 0) {
    let loadingOpt: LoadingOptions = {
      // "bubbles" | "circles" | "crescent" | "dots" | "lines" | "lines-small" | null | undefined
      spinner: 'dots',
      duration: duration,
    }
    if (!text) {
      loadingOpt.cssClass = 'custom-loading';
    } else {
      loadingOpt.message = text;
    }
    this.isLoading = true;
    return await this.loadingCtrl.create(loadingOpt).then((obj) => {
      this.loading = obj;
      obj.present().then(() => {
        if (!this.isLoading) {
          this.loading = "";
          obj.dismiss();
        }
      });
    });
  }
  async closeLoading() {
    if (this.isLoading) {
      this.isLoading = false;
      return await this.loadingCtrl.dismiss();
    }
  }
  alterLoadingText(text) {
    if (this.isLoading) {
      this.loading.getElementsByClassName("loading-content")[0].innerHTML = text;
    }
  }
}
