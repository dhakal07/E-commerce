// server/updatePassword.js
const bcrypt = require('bcrypt');
const pool = require('./db');

async function updateAdminPassword() {
  try {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await pool.query('UPDATE users SET password = $1 WHERE email = $2', [hashedPassword, 'rdblueblack07@gmail.com']);
    console.log('✅ Admin password updated to hashed version');
    const updatedUser = await pool.query('SELECT * FROM users WHERE email = $1', ['rdblueblack07@gmail.com']);
    console.log('Updated user:', updatedUser.rows[0]);
  } catch (error) {
    console.error('❌ Error updating password:', error);
  } finally {
    pool.end();
  }
}

updateAdminPassword();