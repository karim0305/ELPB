import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Device } from 'src/device/schema/device.schema';
import { MillInfo } from 'src/millinfo/schema/millinfo.schema';
import { Registration } from 'src/registration/schema/registration.schema';

export type ArrivalDocument = Arrival & Document;

@Schema({ timestamps: true })
export class Gps {
  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;
}

export const GpsSchema = SchemaFactory.createForClass(Gps);

@Schema()
export class Arrival {
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
    ref: Registration.name, 
    required: true 
  })
  registrationId: Types.ObjectId;




  @Prop({ required: true })
  companyCode: string;

  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  lpCode: string;

  @Prop({ required: true })
  lpName: string;

  @Prop({ required: true })
  serialNumber: string;

  @Prop({ required: true })
  imei: string;

  @Prop({ type: GpsSchema })
  gps?: Gps;

  @Prop()
  gpsDistance?: number;

  @Prop()
  towerId?: string;

  @Prop()
  haulageCode?: string;

  @Prop()
  haulageName?: string;

  @Prop()
  registrationNumber?: string;

  @Prop()
  vehicleNumber?: string;

  @Prop()
  permitImage?: string;

  @Prop()
  driverImage?: string;

  @Prop()
  vehicleImage?: string;

  @Prop({ type: Date })
  date?: Date;

  @Prop()
  time?: string;

  @Prop()
  remarks?: string;

  @Prop()
  documentNo?: string;

  @Prop()
  standardTime?: string;

  @Prop()
  timeTaken?: string;

  @Prop()
  difference?: string;

  // New field for Arrival
  @Prop({ required: true })
  status: string;
}

export const ArrivalSchema = SchemaFactory.createForClass(Arrival);
