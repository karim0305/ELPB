import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MillInfo } from 'src/millinfo/schema/millinfo.schema';

@Schema({ timestamps: true })
export class Device extends Document {
   @Prop({
    type: Types.ObjectId,
    ref: MillInfo.name, // 👈 must match MillInfo model name
    required: true,
  })
  millid: Types.ObjectId;

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
  internetStatus: boolean;

  @Prop({ default: null })
  imei?: string;

  @Prop({ default: null })
  macAddress?: string;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
