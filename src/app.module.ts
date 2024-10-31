import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ricardopra:1234@usuario.yotq9.mongodb.net/?retryWrites=true&w=majority&appName=usuario'),
    StudentModule,
  ],
})
export class AppModule {}
