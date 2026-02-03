import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';
import { Device } from 'src/device/schema/device.schema';
import { Elp } from 'src/elp/schema/elp.schema';
import { MillInfo } from 'src/millinfo/schema/millinfo.schema';

export type RegistrationDocument = Registration & Document;

@Schema({ timestamps: true })
export class Gps {
  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export const GpsSchema = SchemaFactory.createForClass(Gps);

@Schema()
export class Registration {


  @Prop({ 
    type: Types.ObjectId, 
    ref: MillInfo.name, 
    required: true 
  })
  millid: Types.ObjectId;

  
  @Prop({ 
    type: Types.ObjectId, 
    ref: Device.name, 
    required: true 
  })
  deviceId: Types.ObjectId;




  @Prop({ 
    type: Types.ObjectId, 
    ref: Elp.name, 
    required: true 
  })
  elpId: Types.ObjectId;



  @Prop({ type: GpsSchema }) // nested object
  gps?: Gps;


  @Prop()
  towerId?: string;


@Prop({ unique: true, required: true, index: true })
regid: string;


  @Prop()
  haulage?: string;

  @Prop()
  vehicleNumber?: string;


  @Prop()
  documentNo?: string;

  @Prop()
  driverImage?: string;

  @Prop()
  vehicleImage?: string;


  @Prop()
  permitImage?: string;

  @Prop()
  remarks?: string;
  

  @Prop({ required: true })
  status: string;
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
