import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Elp } from 'src/elp/schema/elp.schema';
import { MillInfo } from 'src/millinfo/schema/millinfo.schema';

@Schema({ timestamps: true })
export class Device extends Document {
   @Prop({
    type: Types.ObjectId,
    ref: MillInfo.name, // 👈 must match MillInfo model name
    required: true,
  })
  millid: Types.ObjectId;


   @Prop({
    type: Types.ObjectId,
    ref: Elp.name, // 👈 must match Elp model name
    required: true,
  })
  elpid: Types.ObjectId;

  @Prop()
  deviceModel: string;

  @Prop()
  deviceBrand: string;

  @Prop({
    type: {
      latitude: Number,
      longitude: Number,
      altitude: Number,
      speed: Number,
    },
  })
  location: {
    latitude: number;
    longitude: number;
    altitude?: number;
    speed?: number;
  };

  @Prop()
  approximateLocation: string;

  @Prop()
  type: string;

  @Prop({ default: null })
  imei?: string;

  @Prop({ default: null })
  Tawerid?: string;
   
  @Prop({ default: 'Deactive' })
  status?: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
