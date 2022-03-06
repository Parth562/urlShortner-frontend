const urlInput = document.getElementById('input-url');
const submitBtn = document.getElementById('submitBtn');
const result = document.getElementById('result');
const copyBtn = document.querySelector('.result-box button');
const form = document.querySelector('form');
const resultBox = document.querySelector('.result-box');

const originalUrl =
    'https://young-mountain-38547.herokuapp.com/api/v1/shortUrl';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const url = urlInput.value;
    const data = await fetchData(url);
    const object = await data.json();
    console.log(object);
    if (object.shortUrl) {
        result.value = object.shortUrl;
        resultBox.style.display = 'block';
        urlInput.value = '';
    }
});

const fetchData = async (URL) => {
    return await fetch(
        'https://young-mountain-38547.herokuapp.com/api/v1/shortUrl',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url: URL }),
        }
    );
};

copyBtn.addEventListener('click', (e) => {
    result.select();
    result.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(result.value);
});
