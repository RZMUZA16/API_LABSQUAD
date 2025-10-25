import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // 🔹 1. Generate User (Mahasiswa, Dosen, Kaplab, Admin)
  const roles = ['MAHASISWA', 'DOSEN', 'KAPLAB', 'ADMIN'] as const;

  const users = await Promise.all(
    Array.from({ length: 20 }).map(async () => {
      const role = faker.helpers.arrayElement(roles);
      return prisma.user.create({
        data: {
          nama: faker.person.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        },
      });
    })
  );

  console.log(`✅ Created ${users.length} users`);

  // 🔹 2. Generate Activity
  const activities = await Promise.all(
    Array.from({ length: 10 }).map(() =>
      prisma.activity.create({
        data: {
          nama_activity: faker.hacker.verb() + ' ' + faker.hacker.noun(),
          deskripsi_activity: faker.lorem.sentence(),
          poin_default: faker.number.int({ min: 5, max: 20 }),
          is_active: faker.datatype.boolean(),
        },
      })
    )
  );

  console.log(`✅ Created ${activities.length} activities`);

  // 🔹 3. Generate Sertifikat
  const sertifikats = await Promise.all(
    Array.from({ length: 15 }).map(() => {
      const user = faker.helpers.arrayElement(users);
      return prisma.sertifikat.create({
        data: {
          nama: faker.company.name(),
          deskripsi: faker.lorem.sentence(),
          userId: user.id,
        },
      });
    })
  );

  console.log(`✅ Created ${sertifikats.length} sertifikats`);

  // 🔹 4. Generate Sertifikat-Activity relation
  const sertifikatActivities = await Promise.all(
    Array.from({ length: 20 }).map(() => {
      const sertifikat = faker.helpers.arrayElement(sertifikats);
      const activity = faker.helpers.arrayElement(activities);
      return prisma.sertifikat_activity.create({
        data: {
          sertifikatId: sertifikat.id,
          activityId: activity.id,
        },
      });
    })
  );

  console.log(`✅ Created ${sertifikatActivities.length} sertifikat_activities`);

  // 🔹 5. Generate PoinLab
  const poinLabs = await Promise.all(
    Array.from({ length: 30 }).map(() => {
      const user = faker.helpers.arrayElement(users);
      const activity = faker.helpers.arrayElement(activities);
      return prisma.poinLab.create({
        data: {
          studentId: user.id,
          activityId: activity.id,
          poin: faker.number.int({ min: 10, max: 100 }),
        },
      });
    })
  );

  console.log(`✅ Created ${poinLabs.length} poinLab`);
}

main()
  .then(() => {
    console.log('🎉 Seeding selesai!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
