import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student, StudentDocument } from './student.schema';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {}

  async create(data: Partial<Student>): Promise<Student> {
    const newStudent = new this.studentModel(data);
    return newStudent.save(); 
  }

  async findAll(): Promise<Student[]> {
    return this.studentModel.find().exec(); 
  }

  async findOne(id: string): Promise<Student> {
    return this.studentModel.findById(id).exec(); 
  }

  async update(id: string, data: Partial<Student>): Promise<Student> {
    return this.studentModel.findByIdAndUpdate(id, data, { new: true }).exec(); 
  }

  async remove(id: string): Promise<Student> {
    return this.studentModel.findByIdAndDelete(id).exec(); 
  }
}
