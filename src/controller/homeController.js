import mysql from 'mysql2';

//create connection to database
const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   database: 'jwt',
});

export const handleHomePage = (req, res) => {
   return res.render('home.ejs');
};

export const handleUserPage = (req, res) => {
   return res.render('user.ejs');
};

export const handleCreateUser = (req, res) => {
   const email = req.body.email;
   const username = req.body.username;
   const password = req.body.password;

   connection.query(
      'INSERT INTO users (email,password,username) VALUES (?,?,?)',
      [email, password, username],
      (err, results) => {
         console.log(results);
      },
   );
   console.log('Check req.body:', req.body);
   return res.send('Create user successfully!');
};
