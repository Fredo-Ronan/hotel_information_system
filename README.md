# Hotel Information System Frontend | UAS Pemrograman Web Gasal 2023/2024

### A bit of story behind this project 🧐
This project is one of my college big assignment to make a Full Stack Hotel Information System. This project is originally hosted using vercel, but later after roughly 3 years later, i've built my own home server so that i can deploy this project on my own server at home that i control. Therefore i've dockerized this project so that it's easy to deploy on any machine. <br><br>
You can access the demo at https://his.fredoronan.web.id/ if you want to give it a try. **Remember** that **anyone can make their own account**, but if you want to use the existing account, you can use this: <br><br>
<strong>User Account</strong><br>
| Field | Value |
|----------|-----------|
| Username | userDummy |
| Password | dummyUser1! |

#### _There is an admin account that can manage almost anything, but please be responsible to this admin account if you want to give a try to it._

<strong>Admin Account (manage rooms, bookings and user data)</strong><br>
| Field | Value |
|----------|-----------|
| Username | admin |
| Password | admin |


This repository is the frontend side of the project that built using Vite with React Framework for the UI. <br>
The Backend: https://github.com/Fredo-Ronan/hotel_information_system_api
<br><br>

> _Below is just details that important when i submit the assignment to the lecturer, so you can ignore those :)_

## Kelas B Kelompok 15

## Anggota Kelompok:
- Martinus Bagas Billy Valentino Putra (210711354) - Frontend React Halaman Booking, Booking Detail, Modal Pembayaran.
- Boniface Fredo Ronan Antolino (210711446) - Backend API Laravel, Frontend React Login, Register, Halaman Utama, Integrasi Backend dan Frontend, Deploy dan Hosting.
- Iqbal Firmansyah Adinda (210711485) - Frontend React Admin.

## Username & Password Login:
- Login User:
   - Username : User 1
   - Password : password1
- Login Admin:
   - Username : admin
   - Password : admin
## Bonus Yang diambil
- Hosting:
   - Backend: [https://the5stars-hotel-api.vercel.app/](https://the5stars-hotel-api.vercel.app/)
   - Frontend: [https://the5stars-hotel.vercel.app/](https://the5stars-hotel.vercel.app/)
- Routes API:
  > NOTE! <br/>
  > route /api/api -> kalau dari link hostingan <br/>
  > route /api -> kalau dari menjalankan secara localhost
  #### _Route Admin_
    - GET /api/api/booking - Get All Booking Data (Admin)
    - GET /api/api/room - Get All Room Data (Admin)
    - GET /api/api/user - Get All User Data (Admin)
    - POST /api/api/room - Create Room Data (Admin)
    - POST /api/api/room/{id} - Update Room Data (Admin)
    - DELETE /api/api/booking/{id} - Delete Booking Data ketika user sudah check out (Admin)
    - DELETE /api/api/room/{id} - Delete Room Data (Admin)
    - DELETE /api/api/user/{id} - Delete User Data (Admin)
  #### _Route User_
    - GET /api/api/mybooking - Get All User Booking Data (User)
    - GET /api/api/getUserData/{id} - Get User Profile Data (User)
    - GET /api/api/kamar - Get All Room Data (User)
    - POST /api/api/booking - Create Booking Data (User)
    - POST /api/api/updateProfileData/{id} - Update Profile Data Except Profile Picture (User)
    - POST /api/api/updateProfilePhoto/{id} - Update Profile Picture User (User)
  #### _Route Global_
    - GET /api/api/register/verify/{verify_key} - Verify Verify Key from Email using GET
    - GET /api/api/logout - Logout for User
    - POST /api/api/register - Create User Data/Sign Up
    - POST /api/api/login - Login for User
- React:
   - Link Repository: https://github.com/Fredo-Ronan/PW2023_B_15_React
