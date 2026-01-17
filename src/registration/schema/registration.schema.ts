import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Types } from 'mongoose';
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

  @Prop({ type: GpsSchema }) // nested object
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
}

export const RegistrationSchema = SchemaFactory.createForClass(Registration);
