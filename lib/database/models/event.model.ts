import mongoose, { Schema, model, models } from "mongoose";
import { IEvent } from "../schemas/event.schema";

const EventSchema = new Schema<IEvent>({
   title:{
    type:String,
    required:true,
   },
   description:{
    type:String
   },
   location:{
    type:String,
   },
   createdAt:{
    type:Date,
    default: Date.now
   },
   imageUrl:{
    type:String,
    required:true
   },
   startDateTime:{
    type:Date,
    default: Date.now
   },
   endDateTime:{
    type:Date,
    default: Date.now
   },
   price:{
    type:String
   },
   isFree:{
    type:Boolean,
    default:false
   },
   url:{
    type:String
   },
   category:{
    type:mongoose.Types.ObjectId,
    ref:"Category"
   },
   organizer:{
    type:mongoose.Types.ObjectId,
    ref:"User"
   }
});


const Event = models.Event || model("Event",EventSchema);

export default Event;