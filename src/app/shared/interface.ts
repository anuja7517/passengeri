export interface Ipassenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkInDate: checkIn;
    children: Ichild[] | null
}

export type checkIn = null | number;
// export type Ichild =
//children?children : 0

export type Ichild = {name : string,age:number}