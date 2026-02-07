import Database from 'better-sqlite3';
import { readFileSync } from 'fs';
import { join } from 'path';

const DB_PATH = join(process.cwd(), 'db', 'fieldnotes.db');

export function initializeDatabase() {
  const db = new Database(DB_PATH);
  
  // Read and execute schema
  const schema = readFileSync(join(process.cwd(), 'db', 'schema.sql'), 'utf-8');
  db.exec(schema);
  
  console.log('Database initialized at:', DB_PATH);
  
  return db;
}

export function getDatabase() {
  return new Database(DB_PATH);
}
