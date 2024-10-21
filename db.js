import mysql from 'mysql2/promise';

let connection

export async function connect() {
    mysql.createConnection({
        host: 'localhost', // 数据库主机
        user: 'root',      // 数据库用户名
        password: '123123', // 数据库密码
        database: 'tiny_link'   // 数据库名称
    }).then(res => {
        connection = res;
    });
}

export const getConnection = () => connection;
