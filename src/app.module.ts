// postgres://gwlddzbrbqbqkg:ff32e59dcd130fd82bd2b8a4b0983114466e3ba6b1b70970e965d6c8ac90b50f@ec2-3-234-131-8.compute-1.amazonaws.com:5432/d2aj1nk5hsc9lr

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost' || 'ec2-3-234-131-8.compute-1.amazonaws.com',
    //   port: 5432,
    //   username: 'postgres' || 'gwlddzbrbqbqkg',
    //   password:
    //     '123456' ||
    //     'ff32e59dcd130fd82bd2b8a4b0983114466e3ba6b1b70970e965d6c8ac90b50f',
    //   database: 'task_database' || 'd2aj1nk5hsc9lr',
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ec2-52-4-104-184.compute-1.amazonaws.com',
      port: 5432,
      username: 'gpqfheityhluup',
      password: 'a6f677b5727a17a27e8b2781fb978892f93548b08f456f80cbbe980c06b07739',
      database: 'dc55trppl4p17t',
      autoLoadEntities: false,
      synchronize: true,
      entities:['dist/**/*.entity.js']
    }),
    UserModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
