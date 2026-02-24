import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Arrival } from 'src/arrival/entities/arrival.entity';
import { MillInfo } from 'src/millinfo/schema/millinfo.schema';
import { Registration } from 'src/registration/schema/registration.schema';

export type VerificationDocument = Verification & Document;

@Schema({ timestamps: true })
export class Verification {

  @Prop({
    type: Types.ObjectId,
    ref: MillInfo.name,
    required: true,
  })
  millid: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: Registration.name,
    required: true,
  })
  registrationid: Types.ObjectId;
@Prop({
  type: Types.ObjectId,
  ref: Arrival.name,
  required: true,
})
arrivalid: Types.ObjectId;// If you have Arrival schema, add ref here

  @Prop({
    required: true,
  })
  status: string;

  @Prop()
  remarks?: string;
}

export const VerificationSchema =
  SchemaFactory.createForClass(Verification);