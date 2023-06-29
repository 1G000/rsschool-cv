# Gorbatovskiy Igor

## Junior frontend developer, tennis player

---

## About Me:

I was born and live in Saint Petersburg, Russia. I have been working as a power engineer for over ten years. In my spare time I study frontend development and play tennis

## Contact information:

- **E-mail:** gorbatovskiy.igor@gmail.com
- **GitHub:** [1G000](https://github.com/1G000)

## Frontend Skills:

- HTML5
- CSS3/SASS
- JavaScript Basics
- React Basics
- Git, GitHub
- VS Code

## Code Example

_Function from my entry task [Tennis Shop](https://github.com/1G000/Tennis-shop) to one of the companies_

```
function createItems(items, container) {
  items.forEach((el) => {
    const card = document.createElement("li")
    card.classList.add("item")
    container.append(card)

    const itemImg = document.createElement("img")
    itemImg.classList.add("item-img")
    itemImg.src = `${el.imgUrl}`
    itemImg.alt = `${el.alt}`
    card.append(itemImg)

    const itemName = document.createElement("h3")
    itemName.classList.add("item-name")
    itemName.append(el.modelName)
    card.append(itemName)

    const dateField = document.createElement("div")
    dateField.classList.add("date-field")
    card.append(dateField)

    const dateTitle = document.createElement("p")
    const dateValue = document.createElement("p")
    dateField.classList.add("date-field")
    dateValue.classList.add("date-value")
    dateTitle.classList.add("date-title")
    dateField.append(dateTitle)
    dateField.append(dateValue)
    dateTitle.append(`Дата добавления на сайт:`)
    dateValue.append(el.date)

    const buyBtn = document.createElement("button")
    buyBtn.classList.add("buy-btn")
    buyBtn.addEventListener("click", function () {
      const orderName = document.querySelector("#my-modal .order-name")
      orderName.innerHTML = el.modelName

      document.querySelector("#my-modal").classList.add("open")
    })
    card.append(buyBtn)
    buyBtn.append("Купить")
  })
}
```

## Courses:

- HTML academy JS
- Udemy JS
- Udemy React

## Languages:

- Russian (Native)
- English (Intermediate)
