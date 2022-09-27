---
sidebar_position: 2
---

# Penginstalan

## Penginstalan standar

Kamu bisa download dan menginstal Go-Jet dengan mengikuti langkah-langkah ini:

- Download Go-Jet yang dirilis dari [GitHub](https://github.com/shahind/go-jet)
- Ekstrak download-an tadi ke root projekmu
- Clone file env.example di directory root projekmu dengan diberi nama .env
- Sesuaikan interface server di config/server.go (opsional)
- Download semua dependencies dengan cara mengeksekusi go mod download di root projekmu
- Buat CLI utility dengan make build-cli
- Eksekusi ./alfred show:commands untuk melihat semua command yang tersedia
- Eksesuki make run untuk menjalankan http servernya

## Docker
Go-Jet menyediakan sebuah file docker-compose.yml yang bisa digunakan para developer untuk men-setup
environtment development yang baru dengan lebih mudah: untuk keperluan ini pastikan Docker dan Docker-compose sudah terinstal di sistem development.

:::tip
docker-composer.yml disini sudah mendefinisikan beberapa service, jadi sudah dikonfigurasi untuk menyediakan instansi MySQL, Redis, MongoDB dan ElasticSearch; jika perlu, service lainnya bisa diinstansiasikan dengan memodifikasi file docker-compose.yml.
:::

## Mengkompile dan menjalankan
Jika kamu ingin menjalankan Go-Jet untuk dicoba, kamu bisa jalankan command berikut:
```
$ make run
```
Untuk mengkompile seluruh projek, cukup jalankan:
```
$ make build
```
Kemudian untuk memulai, kamu cukup jalankan Go-Jet dengan command:
```
$ ./goweb
```
Sekarang server akan mulai menerima request dari port yang sudah didefinisikan di config/server.go