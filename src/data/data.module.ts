/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PrismaService } from './prisma.service';
import { UserService } from './user.service';

@Module({
    imports: [],
    controllers: [],
    providers: [PrismaService, UserService, PostService],
    exports: [UserService, PostService]
})
export class DataModule { }
