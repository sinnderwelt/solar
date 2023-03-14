offset = 0;
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const sliderLine = document.querySelector('#sliderLine');

nextBtn.addEventListener('click', function(e){
    e.preventDefault();
    offset += 546; // offset = offset + 546;

    if(offset > 1092) {
        offset = 0;
    }

    sliderLine.style.right = offset + 'px';
});

prevBtn.addEventListener('click', function(e){
    e.preventDefault();
    offset -= 546;

    if(offset < 0) {
        offset = 1092;
    }

    sliderLine.style.right = offset + 'px';
});