

  AOS.init();


    

// إعداد مفتاح Google Translate API
const apiKey = 'AIzaSyD1VeoALp_QEL-fNUb8aCPGjFTbfaRmrWc';

// التعامل مع تغيير اللغة
document.getElementById('language-select').addEventListener('change', function() {
  const selectedLanguage = this.value;
  const textToTranslate = document.getElementById('text-to-translate').innerText;

  // استدعاء دالة الترجمة
  translateText(textToTranslate, selectedLanguage);
});

// دالة الترجمة باستخدام Google Cloud Translation API
function translateText(text, targetLanguage) {
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
  
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      q: text,
      target: targetLanguage
    })
  })
  .then(response => response.json())
  .then(data => {
    // عرض النص المترجم
    const translatedText = data.data.translations[0].translatedText;
    document.getElementById('text-to-translate').innerText = translatedText;
  })
  .catch(error => console.error('Error:', error));
}


  