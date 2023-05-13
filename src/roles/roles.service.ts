import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  // В конструктор помещаем инициализацию репозитория класса Role для дальнейшего использования.
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) {}

  // Функция создания роли.
  async create(createRoleDto: CreateRoleDto) {
    // Получаем роль из репозитория.
    const existsRole = await this.roleRepository.findOne({
      where: {
        name: createRoleDto.name,
      },
    });
    // Обрабатываем ошибку наличия роли в БД. Если роль с пришедшими данными уже есть в БД, выкидываем ошибку.
    if (existsRole !== null) {
      throw new ConflictException(
        'Роль с такими данными уже существует! Попробуйте еще раз.',
      );
    }
    // Если роли с пришедшими данными нет, то создаем ее.
    const newRole = await this.roleRepository.create(createRoleDto);
    // Сохраняем роль в БД.
    await this.roleRepository.save(newRole);
    // Возвращаем созданную роль на клиент.
    return newRole;
  }

  // Функция получения списка всех ролей.
  async findAll() {
    return await this.roleRepository.find();
  }

  // Функция получения одной роли по ID.
  async findOneById(id: string) {
    // Поиск роли в репозитории по ID.
    const existsRole = await this.roleRepository.findOne({
      where: { id },
    });
    // Обрабатываем ошибку наличия роли в БД. Если роль с пришедшим ID отсутствует в БД, выкидываем ошибку.
    this.checkRoleByID(existsRole, id);
    return existsRole;
  }

  // Функция удаления роли.
  async remove(id: string) {
    // Получение роли по ID. Проверка на отсутствие роли уже прописана в методе findById.
    // Поэтому мы получаем действительно существующую роль.
    const existsRole = await this.findOneById(id);
    // Удаляем роль.
    return await this.roleRepository.remove(existsRole);
  }

  private checkRoleByID(role: Role, id: string) {
    if (role === null) {
      throw new NotFoundException(
        `Роли с ID: ${id} не существует! Проверьте данные и попробуйте еще раз.`,
      );
    }
    return;
  }
}
