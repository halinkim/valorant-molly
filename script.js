document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];

    const filterButtons = document.querySelectorAll('.catbtn');
    const tarButtons = document.querySelectorAll('.tarbtn');
    const useforButtons = document.querySelectorAll('.useforbtn');
    const imageItems = document.querySelectorAll('.imageItem');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.catbtn.active').classList.remove('active');
            this.classList.add('active');
            filterImages();
        });
    });

    tarButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.tarbtn.active').classList.remove('active');
            this.classList.add('active');
            filterImages();
        });
    });

    useforButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.useforbtn.active').classList.remove('active');
            this.classList.add('active');
            filterImages();
        });
    });

    function filterImages() {
        const category = document.querySelector('.catbtn.active').getAttribute('data-filter');
        const tar = document.querySelector('.tarbtn.active').getAttribute('tar-filter');
        const usefor = document.querySelector('.useforbtn.active').getAttribute('usefor-filter');

        imageItems.forEach(item => {
            const itemCategory = item.getAttribute('data-category');
            const itemTar = item.getAttribute('target');
            const itemUsefor = item.getAttribute('usefor');

            if ((category === 'all' || itemCategory === category) && (tar === 'all' || itemTar === tar) && (usefor === 'all' || itemUsefor === usefor)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

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