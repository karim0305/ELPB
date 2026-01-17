import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MillInfo } from 'src/millinfo/schema/millinfo.schema';


export type HaulageDocument = Haulage & Document;

@Schema({ timestamps: true })
export class Haulage {

  @Prop({
    type: Types.ObjectId,
    ref: MillInfo.name,
    required: true,
  })
  millid: Types.ObjectId;

  @Prop({ required: true, unique: true, trim: true })
  haulageCode: string;

  @Prop({ required: true, trim: true })
  haulageName: string;

  @Prop({ trim: true })
  remarks?: string;
}

export const HaulageSchema = SchemaFactory.createForClass(Haulage);
