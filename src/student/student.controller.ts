import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.schema';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createStudentDto: Partial<Student>) {
    return this.studentService.create(createStudentDto);
  }

  @Get()
  async findAll() {
    const students = await this.studentService.findAll();
    console.log('Students:', students); 
    return students;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStudentDto: Partial<Student>) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}
