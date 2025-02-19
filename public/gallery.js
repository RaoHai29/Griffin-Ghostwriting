// Get references to elements
const showMoreBtn = document.querySelector('.show-more-btn');
const genreButtons = document.querySelectorAll('.genre-btn');
const books = document.querySelectorAll('.book-1');
let showMore = true;

// Show More / Show Less logic
showMoreBtn.addEventListener('click', () => {
    if (showMore) {
        // Show all books
        books.forEach(book => {
            book.classList.remove('hidden');
        });
        showMoreBtn.textContent = 'Show Less';
    } else {
        // Hide books beyond the first 8
        books.forEach((book, index) => {
            if (index >= 8) {
                book.classList.add('hidden');
            }
        });
        showMoreBtn.textContent = 'Show More';
    }
    showMore = !showMore;
});

// Filter books by genre (initially show 8 random books)
genreButtons.forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.getAttribute('data-genre');
        
        // First hide all books
        books.forEach(book => {
            book.classList.add('hidden');
        });

        // Show only the books that match the genre and display the first 8
        let count = 0;
        books.forEach(book => {
            if (book.classList.contains(genre)) {
                if (count < 8) {
                    book.classList.remove('hidden');
                    count++;
                }
            }
        });

        // Update the show more button based on the current state
        if (count === 8) {
            showMoreBtn.textContent = 'Show More';
            showMore = true;
        }
    });
});
