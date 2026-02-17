import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { MillInfo } from 'src/millinfo/schema/millinfo.schema';

export type ElpDocument = Elp & Document;

@Schema({ timestamps: true })
export class Elp {
  @Prop({ 
      type: Types.ObjectId, 
      ref: MillInfo.name, 
      required: true 
    })
    millid: Types.ObjectId;

    
  @Prop({ required: true })
  elpCode: string;

  @Prop({ required: true })
  elpName: string;

  @Prop()
  remarks?: string;

  @Prop ({ default: 'active' })
  status: string;
}

export const ElpSchema = SchemaFactory.createForClass(Elp);
