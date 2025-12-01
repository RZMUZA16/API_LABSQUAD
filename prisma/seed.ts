import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("🚀 Starting Seeder...");

  // ============================
  // 1. Generate Users
  // ============================
  const roles = ["MAHASISWA", "DOSEN", "KAPLAB"] as const;

  const users = await Promise.all(
    Array.from({ length: 20 }).map(() => {
      const role = faker.helpers.arrayElement(roles);
      return prisma.user.create({
        data: {
          nama: faker.person.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
          user_role: role,
        },
      });
    })
  );

  console.log(`✅ Created ${users.length} users`);

  // ============================
  // 2. Generate Activities
  // ============================
  const activities = await Promise.all(
    Array.from({ length: 10 }).map(() =>
      prisma.activity.create({
        data: {
          nama_activity: faker.hacker.verb() + " " + faker.hacker.noun(),
          deskripsi_activity: faker.lorem.sentence(),
          poin_default: faker.number.int({ min: 5, max: 20 }),
          is_active: true,
        },
      })
    )
  );

  console.log(`✅ Created ${activities.length} activities`);

  // ============================
  // 3. Generate Sertifikat
  // ============================
  const sertifikats = await Promise.all(
    Array.from({ length: 15 }).map(() =>
      prisma.sertifikat.create({
        data: {
          nama: faker.company.name(),
          deskripsi: faker.lorem.sentence(),
        },
      })
    )
  );

  console.log(`✅ Created ${sertifikats.length} sertifikats`);

  // ============================
  // 4. Generate SertifikatUser
  // ============================
  const sertifikatUsers = await Promise.all(
    Array.from({ length: 20 }).map(() => {
      const user = faker.helpers.arrayElement(users);
      const sertifikat = faker.helpers.arrayElement(sertifikats);

      return prisma.sertifikatUser.create({
        data: {
          userId: user.id,
          sertifikatId: sertifikat.id,
        },
      });
    })
  );

  console.log(`✅ Created ${sertifikatUsers.length} sertifikatUser relations`);

  // ============================
  // 5. Generate PoinLab
  // ============================
  const poinLabs = await Promise.all(
    Array.from({ length: 40 }).map(() => {
      const sertifikat = faker.helpers.arrayElement(sertifikats);
      const activity = faker.helpers.arrayElement(activities);

      return prisma.poinLab.create({
        data: {
          sertifikatId: sertifikat.id,
          activityId: activity.id,
          poin: faker.number.int({ min: 5, max: 100 }),
        },
      });
    })
  );

  console.log(`✅ Created ${poinLabs.length} poinLab entries`);
}

main()
  .then(() => console.log("🎉 Seeder selesai!"))
  .catch((err) => {
    console.error("❌ Seeder Error:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
