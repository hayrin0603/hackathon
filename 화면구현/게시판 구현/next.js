let currentPage = 1;

function goToPrevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePageNumber();
    }
}

function goToNextPage() {
    // 아래에 현재 페이지 수를 더한 총 페이지 수로 대체해야 함
    const totalPages = 10;

    if (currentPage < totalPages) {
        currentPage++;
        updatePageNumber();
    }
}

function updatePageNumber() {
    const currentPageSpan = document.querySelector('.current-page');
    currentPageSpan.textContent = currentPage;
}
