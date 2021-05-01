const input1 = document.getElementById('num-inp-1')
const input2 = document.getElementById('num-inp-2')
const calcBtn = document.getElementById('sum-btn')
const answerElement = document.getElementById('result')


input1.addEventListener('input', () => {
    input1.value === '' ?
        input2.value = '' : input2.value = 69 - input1.value


    if (input1.value === '') answerElement.innerHTML = ''

})

input2.addEventListener('input', () => {
    input2.value === '' ?
        input1.value = '' : input1.value = 69 - input2.value


    if (input2.value === '') answerElement.innerHTML = ''
})

calcBtn.addEventListener('click', () => {
    if (String(input1.value).length > 0 && String(input2.value).length > 0) answerElement.innerHTML = Number(input1.value) + Number(input2.value)
})