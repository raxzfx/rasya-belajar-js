function pesanMakanan(namaMakanan, stokMakanan) {
  return new Promise((resolve, reject) => {
    if (stokMakanan > 0) {
      resolve(
        `penasan ${namaMakanan}, berhasil. sisa makanan tersedia ${
          stokMakanan - 1
        }`
      );
    } else {
      reject(`maaf stok ${namaMakanan} sudah habis`);
    }
  });
}

pesanMakanan("mie goreng", 0)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
