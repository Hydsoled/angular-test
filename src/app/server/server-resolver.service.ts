import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../auth.service';
import {Injectable} from '@angular/core';

interface Server {
  id: number;
  name: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private authService: AuthService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    return 1;
  }
}
