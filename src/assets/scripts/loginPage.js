const columns = document.querySelectorAll('.column');

document.addEventListener('dragstart', (e) => {
    e.target.classList.add('dragging');
});

document.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
});

columns.forEach((itens) => {
    itens.addEventListener('dragover', (e) => {
        const dragging = document.querySelector('.dragging');
        const applyAfter = getNewPosition(itens, e.clientY);

        if (applyAfter) {
            applyAfter.insertAdjacentElment('afterend', dragging);
        } else {
            itens.prepend(dragging);
        }
    });
});

function getNewPosition(column, posY) {
    const cards = column.querySelectorAll('.itens:not(.dragging)');
    let result;

    for (let refer_card of cards) {
        const box = refer_card.getBoundingClienteReact();
        const boxCenterY = box.y + box.height / 2;

        if (posY >= boxCenterY) result = refer_card;
    }
}