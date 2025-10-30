// Data Film
const filmData = {
  1: {
    judul: "Bayangan Senyum",
    genre: "Drama",
    tahun: "2025",
    ratingDBFPN: "4.6",
    sinopsis: "Kisah seorang perempuan muda yang mencari kembali jati dirinya setelah kehilangan arah hidup di kota besar.",
    sutradara: "Alya Rahman",
    penulis: "Raka Nugroho",
    produser: "Melisa Putri",
    pemeran: "Siti Marini, Dimas Prayoga, Bagus Santoso",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    trailer: "https://www.youtube.com/embed/tgbNymZ7vqY"
  },
  2: {
    judul: "Suara di Langit",
    genre: "Fantasi",
    tahun: "2024",
    ratingDBFPN: "4.2",
    sinopsis: "Film pendek tentang seorang anak yang dapat mendengar suara bintang dan berusaha menyampaikan pesan langit kepada manusia.",
    sutradara: "Bagus Santoso",
    penulis: "Alya Rahman",
    produser: "Raka Nugroho",
    pemeran: "Dimas Prayoga, Melisa Putri",
    poster: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?w=800",
    trailer: "https://www.youtube.com/embed/ScMzIvxBSi4"
  },
  3: {
    judul: "Langit Tanpa Bintang",
    genre: "Romansa",
    tahun: "2023",
    ratingDBFPN: "4.0",
    sinopsis: "Dua orang yang terpisah oleh waktu dan jarak berkomunikasi melalui surat yang dikirim lewat langit malam.",
    sutradara: "Siti Marini",
    penulis: "Bagus Santoso",
    produser: "Melisa Putri",
    pemeran: "Alya Rahman, Raka Nugroho",
    poster: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    trailer: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  4: {
    judul: "Langkah Terakhir",
    genre: "Thriller",
    tahun: "2025",
    ratingDBFPN: "4.8",
    sinopsis: "Seorang agen rahasia harus memilih antara menyelesaikan misi terakhirnya atau menyelamatkan keluarganya dari ancaman misterius.",
    sutradara: "Raka Nugroho",
    penulis: "Alya Rahman",
    produser: "Bagus Santoso",
    pemeran: "Dimas Prayoga, Siti Marini",
    poster: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=800",
    trailer: "https://www.youtube.com/embed/ysz5S6PUM-U"
  },
  5: {
    judul: "Gerimis Sore Itu",
    genre: "Drama",
    tahun: "2024",
    ratingDBFPN: "4.5",
    sinopsis: "Cinta yang tumbuh di antara dua insan dari dunia berbeda, diiringi hujan yang tak kunjung reda.",
    sutradara: "Melisa Putri",
    penulis: "Raka Nugroho",
    produser: "Alya Rahman",
    pemeran: "Bagus Santoso, Siti Marini",
    poster: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800",
    trailer: "https://www.youtube.com/embed/aqz-KE-bpKQ"
  },
  6: {
    judul: "Menatap Senja",
    genre: "Romansa",
    tahun: "2023",
    ratingDBFPN: "4.3",
    sinopsis: "Dua jiwa yang saling mencari arti ketenangan di antara langit jingga dan kesunyian sore.",
    sutradara: "Siti Marini",
    penulis: "Melisa Putri",
    produser: "Raka Nugroho",
    pemeran: "Alya Rahman, Dimas Prayoga",
    poster: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    trailer: "https://www.youtube.com/embed/jfKfPfyJRdk"
  },
  7: {
    judul: "Suara Dalam Diam",
    genre: "Misteri",
    tahun: "2022",
    ratingDBFPN: "4.7",
    sinopsis: "Film pendek penuh teka-teki tentang seorang gadis bisu yang menyimpan rahasia kelam di rumah tua peninggalan keluarganya.",
    sutradara: "Bagus Santoso",
    penulis: "Alya Rahman",
    produser: "Siti Marini",
    pemeran: "Raka Nugroho, Melisa Putri",
    poster: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800",
    trailer: "https://www.youtube.com/embed/5qap5aO4i9A"
  }
};

// Interaksi antar halaman
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".card[data-id]").forEach(card => {
    card.addEventListener("click", () => {
      const id = card.dataset.id;
      const selected = filmData[id];
      if (selected) {
        localStorage.setItem("selectedFilm", JSON.stringify(selected));
        window.location.href = "film.html";
      } else {
        alert("Data film tidak ditemukan.");
      }
    });
  });
});
