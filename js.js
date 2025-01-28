
         var navLink=document.getElementById("navLink");
            function hiddenmenu(){
                navLink.style.right="-200px"
            }
            function showmenu(){
                navLink.style.right="0px"

            };

            var slideImg=document.getElementById("slideImg");
            var images =new Array(
                "img/i1.jpg",
                "img/i2.jpg",
                "img/p1.jpg",
                "img/p4.jpg",
                "img/p3.jpg",
                "img/p2.jpg",
                "img/i4.jpg"

            );
            var len =images.length;
            var i=0;

            function slider(){
                if (i>len-1){
                    i=0;
                }
                slideImg.src=images[i];
                i++;
                setTimeout("slider()",2000)


            }



    



    
        var swiper = new Swiper(".swiper", {
            loop: true,
            grabCursor: true,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                620: {
                    slidesPerView: 2
                },
                1020: {
                    slidesPerView: 3
                },
                1800: {
                    slidesPerView: 4
                },
                2400: {
                    slidesPerView: 5
                },
            }
        });
   