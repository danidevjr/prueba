import { db, User } from 'astro:db'; // Asegúrate de que la ruta sea correcta

export default async function() {
  await db.insert(User).values([
    { id: '1', name: 'Juan Perez', email: 'juan@example.com' },
    { id: '2', name: 'Maria Garcia', email: 'maria@example.com' },
  ]);
}
