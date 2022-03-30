let cart = document.querySelector(".cart");
let buttons = document.querySelector(".gallery-details-container");
let span = document.querySelectorAll(".gallery-details-container span")[1];
let cartSpan = document.querySelector(".cart-item-count");
let cartModalContainer = document.querySelector("#cart-modal-container");
let cartItemContainer = document.querySelector(".cart-item-flex");
let cartArray = [];
let totalItemsCount = 0;
let galleryContainer = document.querySelector(".gallery-container");
let galleryImageThumbnailsCont = document.querySelector('.gallery-image-thumbnails')
let galleryImageThumbnails = galleryImageThumbnailsCont.getElementsByClassName('img')
let activeGalleryImage = document.querySelector(".mainImg");
let modal = document.querySelector('.modal')

galleryContainer.addEventListener("click", (e) => {
    if(e.target.src) {
        activeGalleryImage.src = e.target.src;
    }
   if(e.target.className === 'mainImg') {
    modal.style.display = 'block'
    toSlide(2)
   }
  
});
for(let i = 0; i < galleryImageThumbnails.length;i++) {
    galleryImageThumbnails[i].addEventListener('click', (e) => {
        let current = document.getElementsByClassName('active')
        current[0].className = current[0].className.replace("active", "");
        e.target.className += ' active'
    })
}


if (totalItemsCount === 0) {
  cartSpan.style.display = "none";
}

buttons.addEventListener("click", (e) => {
  if (e.target.innerHTML === "-") {
    span.innerHTML--;
  } else if (e.target.innerHTML === "+") {
    span.innerHTML++;
  } else if (e.target.innerHTML === "Cart button") {
    cartArray.push(span.innerHTML * 125);
    totalItemsCount += parseInt(span.innerHTML);
    let w = cartArray.reduce((a, b) => {
      return a + b;
    });
    if (totalItemsCount == 0 && w == 0) {
      cartSpan.style.display = "none";
      cartItemContainer.innerHTML = `<p>Your cart is empty</p>`;
      console.log(totalItemsCount, w);
    } else {
      cartSpan.style.display = "block";
      cartItemContainer.innerHTML = `
                                        <div class="flex-list-item">
                                            <img src="/ecommerce-product-page-main/images/image-product-1-thumbnail.jpg" alt="">
                                            <div>
                                                <h5>title</h5>
                                                <p>$125 x ${totalItemsCount} ${w}</p>
                                            </div>
                                            <div>
                                                <a href="#">
                                                <img class="trash" src="/ecommerce-product-page-main/images/icon-delete.svg" alt="">
                                                </a>
                                            </div>
                                        </div>
                                        `;
    }
    cartSpan.innerHTML = totalItemsCount;

    //cartModalPara.innerHTML = `$125.00 x ${totalItemsCount} $${w}`
  }
});
cart.addEventListener("click", (e) => {
  cartModalContainer.classList.toggle("show");
});

cartModalContainer.addEventListener("click", (e) => {
  if (e.target.className === "trash") {
    e.target.parentElement.parentElement.parentElement.remove();
    cartItemContainer.innerHTML = `<p>Your cart is empty</p>`;
    totalItemsCount = 0;
    w = 0;
    cartSpan.style.display = "none";
  }
});

function changeSlide(n) {
	showSlide(slideIndex += n);
}

function toSlide(n) {
	showSlide(slideIndex = n);
}

function showSlide(n) {

  const slides = document.getElementsByClassName('slide');
  

  if (n > slides.length) {
    slideIndex = 1;	
  }
  
  if (n < 1) {
  	slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  console.log(slides[slideIndex - 1], n)
  
  slides[slideIndex - 1].style.display = 'block';
  
}