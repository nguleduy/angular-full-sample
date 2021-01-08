import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T> {

  constructor(protected http: HttpClient) {
  }

  /**
   * Extract data that arrives from the response
   * @param res the response
   */
  protected extractData(res: Response): any {
    const body = res.json() || {};
    return body;
  }

  /**
   * Load the base service url by configuration
   */
  public abstract getServiceUrl(): string;

  /**
   * Find an object by its identifier
   * @param id the object identifier
   * @returns gets the object found
   */
  public findById(id: any): Observable<T> {
    return this.http.get<T>(this.getServiceUrl() + '/' + id);
  }

  /**
   * Find all the elements
   * @returns gets the list of objects found
   */
  public findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.getServiceUrl());
  }

  /**
   * Delete an object by its identifier field
   * @param id the object identifier
   * @returns gets the response
   */
  public delete(id): Observable<Response> {
    return this.http.delete<Response>(this.getServiceUrl() + '/' + id);
  }

  /**
   * Insert the data
   * @param data the object containing the data to be inserted
   * @returns gets the response
   */
  public insert(data: T): Observable<Response> {
    return this.http.post<Response>(this.getServiceUrl(), JSON.stringify(data));
  }

  /**
   * Update specific object into DB
   * @param fieldId the name of the field that identify the object
   * @param data the object to be updated
   * @returns gets the response
   */
  public update(fieldId: string, data: T): Observable<Response> {
    return this.http.put<Response>(this.getServiceUrl() + '/' + data[fieldId], JSON.stringify(data));
  }

}
