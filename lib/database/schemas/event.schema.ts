export interface IEvent {
    _id:string;
    title:string;
    description?:string;
    location?:string;
    imageUrl:string
    createdAt:Date;
    startDateTime:Date;
    endDateTime:Date;
    price?:string;
    isFree:boolean;
    url?:string;
    category:Object;
    organizer:IUser
}