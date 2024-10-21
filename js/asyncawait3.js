function prosesPembayaran(jumlahPembayaran, metodePembayaran) {
  return new Promise((resolve, reject) => {
    const method = ["kartu kredit", "transfer bank", "cash"];
    setTimeout(() => {
      if (jumlahPembayaran > 0 && method.includes(metodePembayaran)) {
        resolve(
          `pembayaran sebesar ${jumlahPembayaran} berhasil menggunakan ${metodePembayaran}`
        );
      } else {
        reject(
          "pembayaran gagal: jumlah tidak valid atau metode tidak didukung"
        );
      }
    }, 4000);
  });
}

async function lakukanPembayaran(jumlahPembayaran, metodePembayaran) {
  try {
    const pembayaran = await prosesPembayaran(
      jumlahPembayaran,
      metodePembayaran
    );
    console.log(pembayaran);
  } catch (error) {
    console.log(error);
  }
}

lakukanPembayaran(10, "singkong");
