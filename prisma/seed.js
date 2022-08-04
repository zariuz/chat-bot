import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const course = {
  title: 'React за 5 минут!',
  description: 'Освой курс по React за пять минут и стань Сеньор разработчиком!',
  dateStart: '2022-08-15T19:20:30.451Z',
  dateEnd: '2022-08-25T19:20:30.451Z',
};

const cities = [{ name: 'Москва' }, { name: 'Санкт-Петербург' }, { name: 'Минск' }];

const specialties = [
  {
    title: 'DevOps',
    description:
      'методология автоматизации технологических процессов сборки, настройки и развёртывания программного обеспечения',
  },
  {
    title: 'Frontend',
    description:
      'клиентская сторона пользовательского интерфейса к программно-аппаратной части сервиса.',
  },
  {
    title: 'Backend',
    description:
      'программно-аппаратная часть сервиса, отвечающая за функционирование его внутренней части.',
  },
];

const main = async () => {
  await prisma.$connect();

  await prisma.city.createMany({
    data: cities.map((c) => c),
  });
  await prisma.speciality.createMany({
    data: specialties.map((c) => c),
  });
  await prisma.course.create({ data: course });

  await prisma.$disconnect();
};

main();
