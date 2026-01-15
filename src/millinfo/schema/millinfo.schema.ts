import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MillInfoDocument = MillInfo & Document;

@Schema({ timestamps: true })
export class MillInfo {
  @Prop({ required: true })
  millcode: string;

  @Prop({ required: true })
  millname: string;

  @Prop({ required: true })
  focalperson: string;

  @Prop({ required: true, unique: true })
  cnic: string;

  @Prop({ required: true })
  phone: string;

  @Prop()
  address?: string;

  @Prop({ required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ default: 'Admin' })
  role: string;

  @Prop({ default: 'https://via.placeholder.com/150' })
  profilePicture: string;

  @Prop({ type: Date, default: Date.now })
  lastLogin: Date;

  @Prop({ required: true, default: 'Active' })
  status: string;

  @Prop({ required: true })
  password: string;
}

export const MillInfoSchema = SchemaFactory.createForClass(MillInfo);
