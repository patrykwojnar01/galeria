// otwieranie okienka do logowania
let konto = document.querySelector('.konto')
let konto_okienko = document.querySelector('.konto-okienko')
konto.addEventListener('click', ()=>{
    konto_okienko.classList.toggle('widac')
})

// konto strzalka
document.addEventListener('DOMContentLoaded', function() {
    const konto = document.querySelector('.konto')
    const kontoImg = konto.querySelector('img')

    konto.addEventListener('click', function() {
        const currentRotation = kontoImg.style.transform || 'rotate(0deg)'
        if (currentRotation === 'rotate(180deg)') {
            kontoImg.style.transform = 'rotate(0deg)'
        } else {
            kontoImg.style.transform = 'rotate(180deg)'
        }
    });
});




document.getElementById('add-photo-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('photo-name').value;
    const description = document.getElementById('photo-description').value;
    const file = document.getElementById('photo-file').files[0];

    
    const galleryItem = document.createElement('div');
    galleryItem.classList.add('gallery-item');
    galleryItem.setAttribute('data-name', name.toLowerCase());
    galleryItem.setAttribute('data-description', description.toLowerCase());

   
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file); 
    img.alt = name;
    
    const title = document.createElement('h3');
    title.textContent = name;

    const desc = document.createElement('p');
    desc.textContent = description;

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-btn');
    deleteButton.textContent = 'Usuń';
    deleteButton.onclick = function() {
        galleryItem.remove();
    };

    
    galleryItem.appendChild(img);
    galleryItem.appendChild(title);
    galleryItem.appendChild(desc);
    galleryItem.appendChild(deleteButton);

    
    document.getElementById('gallery-container').appendChild(galleryItem);

    
    document.getElementById('add-photo-form').reset();
});


function searchPhotos() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const items = document.querySelectorAll('.gallery-item');
    
    items.forEach(item => {
        const name = item.getAttribute('data-name');
        const description = item.getAttribute('data-description');
        
        if (name.includes(query) || description.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


