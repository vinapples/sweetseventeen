/* ==========================================
   PARAGRAPHS
========================================== */

const paragraphs = [
    
    `I miss u..`,

    `Happy birthday..

    I know things between us ended in a way neither of us probably expected. 
    We went from knowing each other so well, talking about almost everything, 
    to becoming two people who barely know what to say to each other anymore. 
    And somehow, that distance happened so quietly..`,

    `Maybe there are still things that were left unsaid. 
    Things I should've explained, things I should've said differently, and moments where I wish I had been a little more patient. 
    Especially that last time we talked. I know I chose not to explain anything. 
    I was tired, overwhelmed, and at that moment, I just didn't have the energy to put everything I felt into words. 
    But I realize now that silence can sometimes create misunderstandings of its own.

    I'm not sending this to reopen the past or to change anything between us. 
    I just didn't want your birthday to pass without saying something.`,
    
    `Despite everything that happened, I still genuinely wish good things for u. 
    I hope u're doing well. I hope life has been kind to u, even in ways u don't always notice. 
    I hope u're surrounded by people who make you feel appreciated, understood, and loved for who u really are.
    
    I hope this new age brings you closer to ur dreams. I hope u find happiness in places you never expected, 
    meet people who bring out the best in you, and have more reasons to smile than to worry. And whenever life gets difficult, 
    I hope u remember that u are capable of getting through it.`,

    `There was a time when u were such an important part of my everyday life. We shared conversations, little moments, memories, 
    and pieces of ourselves that I don't think I'll ever completely forget. Even though we're?? now, that doesn't mean those moments suddenly meant nothing.
    
    Sometimes I wonder if things could have been different if we had talked a little longer, listened a little more, or understood each other a little better. 
    But I guess some things don't end because they weren't meaningful. Sometimes they end because two people were simply unable to understand each other at the right time.`,
    
    `Whatever happens, I hope there's no hatred between us. Just two people who once cared about each other, who tried in the ways they knew how, and eventually had to continue their lives separately.

    So, on your birthday, I just want to say: I hope u become someone u're proud of. I hope u achieve the things u've been working for. I hope u find the kind of happiness that feels peaceful, genuine, and lasting`,
    
    `Thank u for every memory, every conversation, every laugh, and even every difficult moment that taught me something about myself. I may not have been able to explain everything back then, but that doesn't mean I didn't care.

    Happy birthday.
    I sincerely hope this year is gentle with you.

    Take care of yourself, always.
    And wherever life takes you next, I hope it takes you somewhere beautiful.

    Happy birthday, love. 🤍`
];


/* ==========================================
   GET ELEMENTS
========================================== */

const paragraphElement =
    document.getElementById("paragraph");

const nextBtn =
    document.getElementById("nextBtn");

const currentPage =
    document.getElementById("currentPage");

const totalPage =
    document.getElementById("totalPage");

const spotifyBtn =
    document.getElementById("spotifyBtn");


/* ==========================================
   PAGE SETTINGS
========================================== */

let currentIndex = 0;


/*
    Menampilkan total halaman

    Contoh:
    04
*/

totalPage.textContent =
    String(paragraphs.length)
    .padStart(2, "0");


/* ==========================================
   SHOW PARAGRAPH
========================================== */

function showParagraph() {

    /*
        Kosongkan teks lama
    */

    paragraphElement.innerHTML = "";


    /*
        Ambil paragraf yang sedang aktif
    */

    const text =
        paragraphs[currentIndex];


    /*
        Pisahkan berdasarkan
        baris baru
    */

    const lines =
        text.split("\n");


    /*
        Menghitung urutan kata
        untuk animasi
    */

    let globalWordIndex = 0;


    /* ======================================
       LOOP SETIAP BARIS
    ====================================== */

    lines.forEach(
        (line, lineIndex) => {


            /*
                Pisahkan baris
                menjadi kata-kata
            */

            const words =
                line.trim().split(/\s+/);


            /* ==================================
               LOOP SETIAP KATA
            ================================== */

            words.forEach(
                (word) => {


                    /*
                        Jangan proses
                        kata kosong
                    */

                    if (!word) {

                        return;

                    }


                    /*
                        Buat element span
                    */

                    const span =
                        document.createElement(
                            "span"
                        );


                    /*
                        Class untuk CSS
                    */

                    span.classList.add(
                        "word"
                    );


                    /*
                        Masukkan kata
                    */

                    span.textContent =
                        word;


                    /*
                        Masukkan ke paragraf
                    */

                    paragraphElement.appendChild(
                        span
                    );


                    /*
                        Tambahkan spasi
                    */

                    paragraphElement.appendChild(
                        document.createTextNode(" ")
                    );


                    /*
                        =========================
                        ANIMATION DELAY
                        =========================

                        90ms per kata

                        kata 1 = 0ms
                        kata 2 = 90ms
                        kata 3 = 180ms
                        dst.
                    */

                    const delay =
                        globalWordIndex * 90;


                    /*
                        Jalankan animasi
                    */

                    setTimeout(
                        () => {

                            span.classList.add(
                                "show"
                            );

                        },
                        delay
                    );


                    /*
                        Tambahkan index
                    */

                    globalWordIndex++;

                }
            );


            /*
                ==============================
                LINE BREAK
                ==============================
            */

            if (
                lineIndex <
                lines.length - 1
            ) {

                paragraphElement.appendChild(
                    document.createElement("br")
                );

            }

        }
    );


    /*
        ==============================
        UPDATE PAGE NUMBER
        ==============================
    */

    currentPage.textContent =
        String(currentIndex + 1)
        .padStart(2, "0");

}


/* ==========================================
   SHOW FIRST PARAGRAPH
========================================== */

showParagraph();


/* ==========================================
   NEXT BUTTON
========================================== */

nextBtn.addEventListener(
    "click",
    function () {


        /*
            ==============================
            FADE OUT
            ==============================
        */

        paragraphElement.style.opacity =
            "0";

        paragraphElement.style.transform =
            "translateY(-8px)";


        /*
            Tunggu animasi selesai
        */

        setTimeout(
            () => {


                /*
                    ==========================
                    NEXT PAGE
                    ==========================
                */

                currentIndex++;


                /*
                    Kalau sudah sampai
                    halaman terakhir,
                    kembali ke halaman pertama
                */

                if (
                    currentIndex >=
                    paragraphs.length
                ) {

                    currentIndex = 0;

                }


                /*
                    ==========================
                    TAMPILKAN PARAGRAF BARU
                    ==========================
                */

                showParagraph();


                /*
                    ==========================
                    FADE IN
                    ==========================
                */

                paragraphElement.style.opacity =
                    "1";

                paragraphElement.style.transform =
                    "translateY(0)";


            },
            350
        );

    }
);


/* ==========================================
   SPOTIFY
========================================== */


/*
    Link Spotify kamu.

    Kita sengaja pakai link biasa,
    bukan iframe.

    Jadi ketika tombol + diklik,
    Spotify akan dibuka dan orang
    tersebut bisa menekan Play sendiri.
*/

const spotifyLink =
    "https://open.spotify.com/track/1aoN2IqlLDCqbeqLylN7BQ";


/* ==========================================
   OPEN SPOTIFY
========================================== */

spotifyBtn.addEventListener(
    "click",
    function () {


        /*
            Buka Spotify di tab baru
        */

        window.open(
            spotifyLink,
            "_blank"
        );

    }
);