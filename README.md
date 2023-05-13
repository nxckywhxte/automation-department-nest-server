# Разработка Backend для сайта Автоматизации и ИТ
1. Необходимо реализовать следующие модели таблиц БД:
   * Пользователь (User):
     - id (UUID, primary key)
     - username (string, unique, required)
     - email (string, unique, required)
     - password (string)
   * Роль (Role):
     - id (UUID, primary key)
     - name (string, unique, required)
   * Профиль пользователя (UserProfile):
     - id (UUID, primary key)
     - last_name (string, unique, required)
     - first_name (string, unique, required)
     - patronymic (string, unique, required)
     - image (string, unique, nullable)
     - birthday (date, nullable)
     - gender (enum, nullable)
     - phone_number (string, nullable)
   * Группа обучения (EducationGroup):
     - id (UUID, primary key)
     - name (string, unique, required)