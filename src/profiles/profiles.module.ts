import { Module } from '@nestjs/common';
import { ProfilesService } from './profiles.service';
import { ProfilesController } from './profiles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Group } from '../groups/entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profile, Group])],
  controllers: [ProfilesController],
  providers: [ProfilesService],
})
export class ProfilesModule {}
