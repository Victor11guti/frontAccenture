// src/app/services/feature-flag.service.ts
import { Injectable } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {
  private readonly FLAG_KEY = 'showNewUI';

  constructor(private remoteConfig: AngularFireRemoteConfig) {}

  /**
   * Fetch+activate de Remote Config y retorna el valor del flag.
   * Ahora getBoolean puede devolver Promise<boolean>, así que lo awaiteamos.
   */
  async loadShowNewUIFlag(): Promise<boolean> {
    // Espera a que traiga y active la nueva configuración
    await this.remoteConfig.fetchAndActivate();
    // getBoolean puede ser asíncrono; lo retornamos ya resuelto
    return await this.remoteConfig.getBoolean(this.FLAG_KEY);
  }

  /**
   * Getter puramente asíncrono para leer el último valor cargado
   */
  async isNewUIEnabled(): Promise<boolean> {
    return await this.remoteConfig.getBoolean(this.FLAG_KEY);
  }
}
