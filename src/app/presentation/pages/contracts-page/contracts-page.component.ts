import { Component, OnInit, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import { EnumContractStatus } from '../../../lib/interfaces';
import { State as TagState } from '../../components/status-tag/status-tag.component';

export interface Contractor {
  name: string;
  contractType: string;
  startDate: number;
  amount: {
    amount: number;
    code: string;
  };
  status: EnumContractStatus;
}

const TRADITIONAL = 'Traditional';


const ELEMENT_DATA: { position: number; contractor: Contractor }[] = [
  {
    position: 1,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 1.0079,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.ACTIVE,
    },
  },
  {
    position: 2,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 4.0026,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.SIGNATURE_PENDING,
    },
  },
  {
    position: 3,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 6.941,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.SIGNATURE_PENDING,
    },
  },
  {
    position: 4,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 9.0122,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.ACTIVE,
    },
  },
  {
    position: 5,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 10.811,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.ACTIVE,
    },
  },
  {
    position: 6,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 12.0107,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.ACTIVE,
    },
  },
  {
    position: 7,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 14.0067,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.ACTIVE,
    },
  },
  {
    position: 8,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 15.9994,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.ACTIVE,
    },
  },
  {
    position: 9,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 18.9984,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.ACTIVE,
    },
  },
  {
    position: 10,
    contractor: {
      name: 'Darlene Robertson',
      amount: {
        amount: 20.1797,
        code: 'USD',
      },
      startDate: Date.now(),
      contractType: TRADITIONAL,
      status: EnumContractStatus.ACTIVE,
    },
  },
];

@Component({
  selector: 'app-contracts-page',
  templateUrl: './contracts-page.component.html',
  styleUrls: ['./contracts-page.component.scss'],
})
export class ContractsPageComponent implements OnInit, OnDestroy {
  searchString: string = '';
  statusMap = new Map<EnumContractStatus, string>([
    [EnumContractStatus.ACTIVE, 'Active'],
    [EnumContractStatus.SIGNATURE_PENDING, 'Signature pending'],
  ]);

  statusTagState = new Map<EnumContractStatus, TagState>([
    [EnumContractStatus.ACTIVE, 'success'],
    [EnumContractStatus.SIGNATURE_PENDING, 'warning'],
  ]);

  contractor: {
    name: string;
  } = { name: 'John Dev' };

  destroyed = new Subject<void>();
  currentScreenSize: string = 'large';

  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'xsmall'],
    [Breakpoints.Small, 'small'],
    [Breakpoints.Medium, 'medium'],
    [Breakpoints.Large, 'large'],
    [Breakpoints.XLarge, 'xlarge'],
  ]);

  contractTypes: {
    value: string;
    viewValue: string;
  }[] = [{ value: 'FREELANCE', viewValue: 'Freelance' }];
  displayedColumns: string[] = [
    'startMargin',
    'name',
    'type',
    'startDate',
    'amount',
    'status',
    'actions',
    'endMargin',
  ];
  dataSource = ELEMENT_DATA;
  constructor(private _breakpointObserver: BreakpointObserver) {
    this._breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
            console.log(this.currentScreenSize);
          }
        }
      });
    console.log(this.statusMap);
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  get statusList(): EnumContractStatus[] {
    return Array.from(this.statusMap.keys());
  }

  getStatusName(key: EnumContractStatus): string | undefined {
    return this.statusMap.get(key);
  }

  getStatusTagState(key: EnumContractStatus): TagState | undefined {
    return this.statusTagState.get(key);
  }
}
