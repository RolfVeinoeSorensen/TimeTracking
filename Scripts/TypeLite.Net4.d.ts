
 
 
 


 
declare module EM.TimeTracking.Dtos {
	interface MainTypeDto {
		key: number;
		title: string;
	}
	interface MainDto {
		key: number;
		parentId: number;
		title: string;
		mainType: EM.TimeTracking.Dtos.MainTypeDto;
		timeRegistrations: EM.TimeTracking.Dtos.TimeRegistrationDto[];
	}
	interface TimeRegistrationDto {
		key: number;
		mainId: number;
		date: Date;
		value: number;
	}
}


///<reference path='definitions/definitelyTyped/knockout/knockout.d.ts' />
///<reference path='definitions/definitelyTyped/knockout.mapping/knockout.mapping.d.ts' />

declare module EM.TimeTracking.Dtos {
	interface IMainTypeDtoVm {
		key: KnockoutObservable<number>;
		title: KnockoutObservable<string>;
	}
	interface IMainDtoVm {
		key: KnockoutObservable<number>;
		parentId: KnockoutObservable<number>;
		title: KnockoutObservable<string>;
		mainType: KnockoutObservable<EM.TimeTracking.Dtos.IMainTypeDtoVm>;
		timeRegistrations: KnockoutObservableArray<EM.TimeTracking.Dtos.ITimeRegistrationDtoVm>;
	}
	interface ITimeRegistrationDtoVm {
		key: KnockoutObservable<number>;
		mainId: KnockoutObservable<number>;
		date: KnockoutObservable<Date>;
		value: KnockoutObservable<number>;
	}
}






