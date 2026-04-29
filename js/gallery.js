// this code handle the image gallery popup in the footer section.
// Author: Sudhir Kumar Gupta

let $images = $(".gallery-img");
let $modal = $("#galleryModal");
let $modalImg = $("#galaryCurrentImg");
let currentIndex = 0;

$modal.on("show.bs.modal", function (e) {
  let clickedImg = $(e.relatedTarget);
  currentIndex = $images.index(clickedImg);
  showImage();
});

$("#galleryModal").on("hidden.bs.modal", function () {
  // need to set focus out to avoid aria-hidden warning
  document.activeElement.blur();
});

function showImage() {
  let src = $images.eq(currentIndex).attr("src");
  $modalImg.attr("src", src);
}

$("#nextBtn").on("click", function () {
  currentIndex = (currentIndex + 1) % $images.length;
  showImage();
});

$("#prevBtn").on("click", function () {
  currentIndex = (currentIndex - 1 + $images.length) % $images.length;
  showImage();
});

$(document).on("keydown", function (e) {
  if (!$("#galleryModal").hasClass("show")) return;

  if (e.key === "Escape") {
    let modalInstance = bootstrap.Modal.getInstance($modal[0]);
    if (modalInstance) modalInstance.hide();
  }

  /*
  if (e.key === "ArrowRight") {
    $("#nextBtn").click();
  }

  if (e.key === "ArrowLeft") {
    $("#prevBtn").click();
  }
  */
  e.key === "ArrowRight" && $("#nextBtn").click();
  e.key === "ArrowLeft" && $("#prevBtn").click();
});

function ChangeObjectFitForImg() {
  let currentFit = $modalImg.css("object-fit");
  $modalImg.css("object-fit", currentFit === "cover" ? "contain" : "cover");
}
