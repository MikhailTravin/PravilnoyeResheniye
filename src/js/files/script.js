function indents() {
    const header = document.querySelector('.header');
    const page = document.querySelector('.page');

    //Оступ от шапки
    let hHeader = window.getComputedStyle(header, false).height;
    hHeader = Number(hHeader.slice(0, hHeader.length - 2));
    if (page) {
        page.style.paddingTop = hHeader + 'px';
    }

    //выпадающее меню
    const menuBody = document.querySelector('.menu__body');
    if (menuBody) {
        if (document.documentElement.clientWidth < 991.98) {
            menuBody.style.top = hHeader + 'px';
            menuBody.style.minHeight = `calc(100vh - ${hHeader}px)`;
            menuBody.style.height = `calc(100vh - ${hHeader}px)`;
        } else {
            menuBody.style.top = '0px';
            menuBody.style.minHeight = 'auto';
            menuBody.style.height = 'auto';
        }
    }

}

window.addEventListener('scroll', () => {
    indents();
});

window.addEventListener('resize', () => {
    indents();
});

indents();

//========================================================================================================================================================

//Каталог
const catalofArrows = document.querySelectorAll('.catalog__arrow');

if (catalofArrows) {
    catalofArrows.forEach(arrow => {
        arrow.addEventListener('click', (event) => {
            const currentColumn = event.target.closest('.catalog__column');

            if (!currentColumn) return;

            document.querySelectorAll('.catalog__column').forEach(column => {
                if (column !== currentColumn) {
                    column.classList.remove('_active');
                }
            });

            currentColumn.classList.toggle('_active');
        });
    });
}

//========================================================================================================================================================

//Фильтр 
const filters = '.filter-blog__filter';
if (filters) {
    const buttonsSelector = `${filters} .filter-blog__navigation`;
    const buttonSelector = `${buttonsSelector} [data-filter]`;
    const buttonActiveClass = '_active';

    const itemsSelector = `${filters} .filter-blog__body`;
    const itemSelector = `${itemsSelector} .filter-blog__column`;
    const itemHiddenClass = '_hide';
    const itemFilterClassPrefix = 'filter-blog__column_';

    if (buttonsSelector) {
        document.querySelectorAll(buttonSelector).forEach(n => {
            n.addEventListener('click', onFilterButtonClick);
        });

        function onFilterButtonClick({ currentTarget: { dataset: { filter } } }) {
            const activeItemClass = itemFilterClassPrefix + filter;

            this.closest(buttonsSelector).querySelectorAll(buttonSelector).forEach(n => {
                n.classList.toggle(buttonActiveClass, n === this);
            });

            this.closest(filters).querySelectorAll(itemSelector).forEach(({ classList: cl }) => {
                cl.toggle(itemHiddenClass, filter !== 'all' && !cl.contains(activeItemClass));
            })
        }
    }

}