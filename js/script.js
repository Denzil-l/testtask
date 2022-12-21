const inputs= document.querySelectorAll('.input')
const selectes= document.querySelectorAll('.select')
const State= document.getElementById('State')
const error = document.querySelectorAll('.error')
console.log(document.cookie)
let arr = document.cookie.split(' ')
for (let i = 0; i < arr.length; i++) {
    let id = arr[i].search('USA')
    if(id > -1){
        State.style.display = 'block'
    }
    
}
function Search(str,n,m) {
    for (let i = 0; i < arr.length; i++) {
        let id = arr[i].search(str)
        if(id === 0){
            let strr = arr[i].split(';')
            inputs[m].value = strr[0].slice(n)
        }
    }
}
function Search2(str,n,m) {
    for (let i = 0; i < arr.length; i++) {
        let id = arr[i].search(str)
        if(i === (arr.length-1)){
            let strr = arr[i]
            selectes[m].value = strr.slice(n)
        }else if(id === 0){
            let strr = arr[i].split(';')
            selectes[m].value = strr[0].slice(n)
            break;
        }
    }
}


Search('name=',5,0)
Search('email=',6,1)
Search('phone=',6,2)
Search('birthday=',9,3)
Search2('country=',8,0)
Search2('state=',6,1)
document.forms.form1.onsubmit = function() {
        const name = this.name.value;
        const email = this.email.value;
        const phone = (this.phone.value);
        const phoneLength = phone.length
        const birthday = this.date.value ;
        let year = parseInt(birthday)
        if(isNaN(name) && name !==""){
            document.cookie =`name=${name}`
            error[0].style.display = 'none'
        }else{
            error[0].style.display = 'block'

        }
        if(email !== ''){
            document.cookie =`email=${email}`
            error[1].style.display = 'none'
        }else{
            error[1].style.display = 'block'

        }
        if(phoneLength < 11){
            document.cookie =`phone=${phone}`
            error[2].style.display = 'none'

        }else{
            error[2].style.display = 'block'

        }
        if((2022 - year) >= 18){
            document.cookie =`birthday=${birthday}`
            error[3].style.display = 'none'

        }else{
            error[3].style.display = 'block'

        }
        return false;
};
document.forms.form2.onsubmit = function() {
        let country = this.country.value;
        if(country === 'USA'){
            State.style.display = 'block'
            const state = this.state.value;
            document.cookie = `country=${country}`
            document.cookie = `state=${state}`
        }else{
            State.style.display = 'none'
            document.cookie = `country=${country}`

        }
     
        return false;
};
// if(country === 'USA'){            State.style.display = 'block'
// }

  