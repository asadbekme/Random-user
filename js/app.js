const form = document.getElementById('form')
const user = document.getElementById('user')
const refreshBtn = document.getElementById('refresh__button')
const deleteBtn = document.getElementById('delete__btn')
const clearBtn = document.getElementById('clear__button')

// refresh
refreshBtn.addEventListener('click', (e) => {
    e.preventDefault()
    reload()
    clearBtn.classList.remove('hidden')
})

// clear
clearBtn.addEventListener('click', (e) => {
    e.preventDefault()
    user.innerHTML = ''
    clearBtn.classList.add('hidden')
})

// get result and update UI
const updateUI = (data) => {
    // console.log('Update UI:', data)
    user.innerHTML = ''
    data.forEach((item) => {
        // console.log(item)
        const { gender, name, picture, location, dob } = item

        user.innerHTML += `
        <li class="user__item">
            <button id="delete__btn" class="user__delete--btn">
                <i class="fas fa-trash"></i>
            </button>
            <img
                class="user__img"
                alt="User photo"
                src=${picture.large}
                width="100"
                height="100"
            />
            <div class="user__name">
                <span class="material-symbols-outlined">badge</span>
                <span>- ${name.title} ${name.first} ${name.last}</span>
            </div>
            <div class="user__year">
                <span class="material-symbols-outlined">cake</span>
                <span>- ${dob.age} years old.</span>
            </div>
            <div class="user__location">
                <span class="material-symbols-outlined">person_pin_circle</span>
                <span>- ${location.city}, ${location.country}</span>
            </div>
            <div class="user__gender">
                <span class="material-symbols-outlined">man</span>
                <span>- ${gender}</span>
            </div>
        </li>
        ` 
    })
}

