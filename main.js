// items
const menu = [
    {
        id: 1,
        title: 'Croissant',
        category: 'breakfast',
        price: 6,
        img: './img/croissant.jpg',
        text: `French Croissant ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 2,
        title: 'Chocolate Milkshake',
        category: 'beverage',
        price: 5,
        img: './img/shake.jpg',
        text: `Sweet Milkshake ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 3,
        title: 'Coffee',
        category: 'beverage',
        price: 3.5,
        img: './img/coffee.jpg',
        text: `Creamy Coffee ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 4,
        title: 'Espresso',
        category: 'beverage',
        price: 3,
        img: './img/espresso.jpg',
        text: `Strong Espresso ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 5,
        title: 'Fruity Pancakes',
        category: 'breakfast',
        price: 9.5,
        img: './img/pancakes.jpg',
        text: `Fresh Pancakes ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 6,
        title: 'Cereals with milk',
        category: 'breakfast',
        price: 7.5,
        img: './img/cereals.jpg',
        text: `Healthy Cereals ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 7,
        title: 'Latte Macchiato',
        category: 'beverage',
        price: 4.5,
        img: './img/Latte.jpg',
        text: `Smooth Latte ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 8,
        title: 'Avocado Toast',
        category: 'breakfast',
        price: 8,
        img: './img/avocado.jpg',
        text: `Perfect Avocado Toast ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 9,
        title: 'Dark Cake',
        category: 'cakes',
        price: 5,
        img: './img/cake.jpg',
        text: `Tasty Cake ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 10,
        title: 'Muffin',
        category: 'cakes',
        price: 3.5,
        img: './img/muffin.jpg',
        text: `Awesome Muffin ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 11,
        title: 'Strawberry Cupcake',
        category: 'cakes',
        price: 4.5,
        img: './img/cupcake.jpg',
        text: `Great Cupcake ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 12,
        title: 'Cheesecake',
        category: 'cakes',
        price: 5,
        img: './img/cheesecake.jpg',
        text: `Yummy Cheesecake dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 13,
        title: 'Blueberry Cookie',
        category: 'cakes',
        price: 2.5,
        img: './img/cookie.jpg',
        text: `Delicious Cookie ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 14,
        title: 'Iced Coffee',
        category: 'beverage',
        price: 4.5,
        img: './img/iced.jpg',
        text: `Refreshing Coffee ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 15,
        title: 'Waffles',
        category: 'breakfast',
        price: 7.5,
        img: './img/waffles.jpg',
        text: `Warm Waffles ipsum dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
    {
        id: 16,
        title: 'Apple Pie',
        category: 'cakes',
        price: 7,
        img: './img/apple.jpg',
        text: `Grandma's recipe dolor sit, amet consectetur adipisicing
        elit. Totam nesciunt sint inventore, et dolores nisi
        ea quidem obcaecati, omnis mollitia hic impedit
        nobis vel repudiandae?`,
    },
];

const center = document.querySelector('.center');

const filterBtns = document.querySelectorAll('.filter');

// load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu);
});

// filter items
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });
        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
            </header>
            <p class="text">
                ${item.text}
            </p>
        </div>
    </article>`;
    });
    displayMenu = displayMenu.join('');
    center.innerHTML = displayMenu;
}
