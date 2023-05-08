import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { ProfilesModule } from './profiles/profiles.module';
import { GroupsModule } from './groups/groups.module';
import { Role } from './roles/entities/role.entity';
import { Profile } from './profiles/entities/profile.entity';
import { User } from './users/entities/user.entity';
import { Group } from './groups/entities/group.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('POSTGRES_HOST'),
        port: configService.get<number>('POSTGRES_PORT'),
        username: configService.get<string>('POSTGRES_USERNAME'),
        password: configService.get<string>('POSTGRES_PASSWORD'),
        database: configService.get<string>('POSTGRES_DATABASE_NAME'),
        entities: [Role, Profile, User, Group],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    RolesModule,
    ProfilesModule,
    GroupsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
