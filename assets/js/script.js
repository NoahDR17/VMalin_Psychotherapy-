let learnMoreBtn = document.getElementById('learn-more')
if (learnMoreBtn !== null) {
    learnMoreBtn.addEventListener('click', function() {
        window.location.href = 'about.html'
    })
}
let faqBtn = document.getElementById('faq');
if (faqBtn !== null) {
    faqBtn.addEventListener('click', function() {
        window.location.href = 'faq.html';
    });
}

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", function() {
        faq.classList.toggle("active")
    })
})