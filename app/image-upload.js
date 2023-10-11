document.addEventListener("DOMContentLoaded", function () {
    const imageUploadInputs = document.querySelectorAll(".image-upload");

    imageUploadInputs.forEach((input) => {
        input.addEventListener("change", function (event) {
            const previewId = this.getAttribute("data-preview");
            const preview = document.getElementById(previewId);

            if (this.files && this.files[0]) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    preview.src = e.target.result;
                };

                reader.readAsDataURL(this.files[0]);
            }
        });
    });
});