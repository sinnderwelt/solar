;

const btn = document.querySelectorAll("#rateBtnLink");
const tabs = document.querySelectorAll(".rateAboutContentPriceTabs");

btn.forEach(function(item) {
    
    item.addEventListener("click", function(link){
        link.preventDefault();
        
        console.log(item);

        const currentBtn = item;
        const dataBtn = currentBtn.getAttribute("data-tab");
        const currentTabs = document.querySelector(dataBtn);

        if(!currentTabs.classList.contains("active")) { //contains позволяет проверить, содержит ли один элемент внутри себя другой
            
            btn.forEach(function(item){
                item.classList.remove("active");
            });

            tabs.forEach(function(item){
                item.classList.remove("active");
            });
             
            currentBtn.classList.add("active");
            currentTabs.classList.add("active");
        }
    });
});

document.querySelector("#rateBtnLink").click();