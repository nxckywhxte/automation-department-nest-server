import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsController } from './groups.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './entities/group.entity';
import { Profile } from '../profiles/entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group, Profile])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}
