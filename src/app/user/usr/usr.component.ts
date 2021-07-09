import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-usr',
  templateUrl: './usr.component.html',
  styleUrls: ['./usr.component.scss']
})
export class UsrComponent implements OnInit, OnDestroy {
  user: {
    id: number,
    name: string
  };
  paramsSub: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params: Params) => {
      this.user = {
        id: this.route.snapshot.params.id,
        name: this.route.snapshot.params.name
      };
    });
  }

  ngOnDestroy(): void {
    console.log('destroyed');
    this.paramsSub.unsubscribe();
  }

}
