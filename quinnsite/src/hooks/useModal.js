import { useEffect } from 'react';

const useModal = () => {
    useEffect(() => {
        const modal = document.getElementById("image-modal");
        const modalImage = document.getElementById("modal-image");
        const closeModal = document.getElementById("close-modal");

        document.querySelectorAll(".image-grid img").forEach((img) => {
            img.addEventListener("click", () => {
                modal.style.display = "flex";
                modalImage.src = img.src;
            });
        });

        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });

        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
                modal.style.display = "none";
            }
        });
    }, []);
};

export default useModal;