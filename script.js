function ident() {
   Swal.fire({
  title: 'ETSS , TUNGGU DULU',
  text: 'apakah kamu kelaa?',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Iyyaa',
  cancelButtonText: 'tidak'
}).then((result) => {
  if (result.isConfirmed) {
     Swal.fire({
        title: "Asikk",
        text: "Selamat Datang Lagi yaa..",
        showConfirmButton: false
     });
  } else {
       Swal.fire({
          title: 'hemmmm',
          text: 'hmmmmmm',
          showConfirmButton: false
       }).then(() => {
          window.location.href = "https://google.com";
        });
  }
})

}

function cannot() {
   Swal.fire({
      title: 'MAAF',
      text: 'halaman ini belum bisa kamu buka :3',
      showConfirmButton: false
   })
}

function can() {
   Swal.fire({
      title: 'ETS',
      text: 'Kamu Sudah berada di halaman ini :3',
      showConfirmButton: false
   })
}


function kela() {
         Swal.fire({
  title: 'Untuk Mengidentifikasi Pengguna, Harap Masukkan Password Yang Telah Di Beri Oleh Dvlooper ( Abdan ) ',
  
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  customClass: {
    title: 'titleNya'
  },
  showCancelButton: false,
  confirmButtonText: 'Ok'
}).then((result) => {
  if (result.isConfirmed) {
    const inputValue = result.value;
    if (inputValue === 'kela123') {
      Swal.fire({
         title: "Benar",
         text: "Selamat Datang Di Website Kamu",
         icon: "succes",
         timer: 3000
      }).then(() => {
         window.location.href = "kelaa.html"
      });
    } else {
      Swal.fire({
         title: 'Maaf',
         text: 'Password Yang Kamu Masukkan Salah !',
         showConfirmButton: false,
         timer: 2000
      }).then(() => {
          location.reload();
        });
    }
  }
});
      }