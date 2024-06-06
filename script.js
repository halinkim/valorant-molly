document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.catbtn');
    const imageItems = document.querySelectorAll('.imageItem');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.catbtn.active').classList.remove('active');
            this.classList.add('active');
            const filter = this.getAttribute('data-filter');
            imageItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    imageItems.forEach(item => {
        item.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.querySelector('img').src;
            captionText.innerHTML = this.querySelector('img').alt;
        });
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});