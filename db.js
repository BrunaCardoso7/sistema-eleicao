// const mysql = require('mysql2/promise');
// const pool = mysql.createPool({
//     host: '127.0.0.1', // porta do banco de dados
//     user: 'root', // usuario do mysql
//     password: 'pendriver', // senha do usuario do mysql
//     database: 'teste', // nome do banco de dados
//     port: 3307,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });
// module.exports = pool;

// db.js
import supabase from './supabaseClient';

const getUsuario = async () => {
  const { data, error } = await supabase
    .from('usuario')
    .select('*');
  
  if (error) {
    console.error('Error fetching usuarios:', error);
    return null;
  }
  
  return data;
};

const addUsuario = async (usuario) => {
  const { data, error } = await supabase
    .from('Usuario')
    .insert([usuario]);
  
  if (error) {
    console.error('Error adding usuario:', error);
    return null;
  }
  
  return data;
};

export { getUsuario, addUsuario };
