  <h3 align="center">Tasks Management Fullstack Project</h3>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [About the Project](#about-the-project)
    -   [Built With](#built-with)
-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Usage](#usage)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

-   Day la du an Fullstack Todo list web application.
-   Dung de bao cao mon hoc Thiet Ke Mang.

### Built With

-   NestJs
-   ReactJs

<!-- GETTING STARTED -->

## Getting Started

Tao file .env trong folder backend va dien vao cac environment can thiet sau:

```
PORT=8080
JWT_SECRET=
RDS_HOSTNAME=
RDS_USERNAME=
RDS_PASSWORD=
RDS_DB_NAME=
TYPEORM_SYNC=
CORS_ORIGIN=
```

Vao /frontend/src/services/base-http.service.js, sua:

```
BASE_URL = "http://18.223.145.100/api";
```

thanh base_url cua backend ban dang su dung. VD, chay backend o localhost:

```
BASE_URL = "http://localhost:8080/api";
```

### Prerequisites

-   Npm
-   Nodejs
-   Docker
-   PostgresSQL

### Installation

#### Cach 1:

1. Clone repo

2. Di chuyen vao thu muc frontend

```
cd frontend
```

3. Cai dat NPM packages

```
npm install
```

4. Chay frontend

```
npm start
```

5. Lam tuong tu voi backend (Luu y: Cai dat PostgresSQL truoc)

#### Cach 2:

1. Chay voi docker:

```
docker-compose up -d
```

## Contributing

Day la du an hoan toan Open. Moi nguoi co the thoai mai:

1. Fork du an
2. Tao Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit thay doi (`git commit -m 'Add some AmazingFeature'`)
4. Push len Branch (`git push origin feature/AmazingFeature`)
5. Tao mot Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

-   Le Minh Thong - [facebook](https://www.facebook.com/MnhThngLe/) - 18521457@gm.uit.edu.vn
-   Nguyen Vo Bao Huy - [facebook](https://www.facebook.com/profile.php?id=100007922357550) - 18520254@gm.uit.edu.vn
-   Nguyen Tran Minh Thien - [facebook](https://www.facebook.com/thienhenry0103) - 18521428@gm.uit.edu.vn
-   Ngo Phuc Thinh - [facebook](https://www.facebook.com/TonyNgo0206) - 18521457@gm.uit.edu.vn

Project Link: [https://github.com/minhthong582000/thiet-ke-mang](https://github.com/minhthong582000/thiet-ke-mang)
