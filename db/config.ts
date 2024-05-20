// db/config.ts
import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
  },
});

export default defineDb({
  tables: { User },
});
