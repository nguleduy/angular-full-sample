import {Inject, Injectable} from '@angular/core';
import {BaseService} from '../../core/services/base.service';
import {Hero} from '../shared/hero';
import {ApiConfig} from '../../core/models/api-config';
import {HttpClient} from '@angular/common/http';
import {CommonUtil} from '../../core/utils/common.util';

@Injectable({
  providedIn: 'root'
})
export class HeroService extends BaseService<Hero> {

  constructor(
    protected http: HttpClient,
    @Inject('api.config') protected apiConfig: ApiConfig
  ) {
    super(http);
  }

  getServiceUrl(): string {
    return CommonUtil.getApiUrl('HEROES_SERVICE_URL', this.apiConfig);
  }
}
