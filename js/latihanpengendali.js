function categorizeNumber(input) {
    // Jika input bukan angka, bangkitkan error
    if (typeof input !== 'number') {
        throw new Error("Input harus berupa angka");
    }

    // Jika input adalah nol
    if (input === 0) {
        return "Nol";
    }

    // Jika input adalah negatif
    if (input < 0) {
        return "Negatif";
    }

    // Jika input adalah bilangan genap
    if (input % 2 === 0) {
        return "Genap";
    }

    // Jika input adalah bilangan ganjil, periksa apakah itu prima
    if (isPrime(input)) {
        return "Prima"; // Jika bilangan ganjil dan prima
    }

    return "Ganjil"; // Jika bilangan ganjil dan tidak prima
}

function isPrime(num) {
    if (num <= 1) return false; // Bilangan kurang dari atau sama dengan 1 bukan bilangan prima
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Jika num habis dibagi oleh i, maka bukan bilangan prima
        }
    }
    return true; // Jika tidak ditemukan pembagi, maka num adalah bilangan prima
}

// Contoh
console.log(categorizeNumber(15)); // Output: "Ganjil"
console.log(categorizeNumber(12)); // Output: "Genap"
console.log(categorizeNumber(17)); // Output: "Prima"
console.log(categorizeNumber(0)); // Output: "Nol"
console.log(categorizeNumber(-5)); // Output: "Negatif"

try {
    categorizeNumber('abc');
} catch (error) {
    console.log(error.message); // Output: "Input harus berupa angka"
}
