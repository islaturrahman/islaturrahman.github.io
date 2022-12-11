export class Stack {
    constructor() {
        this.t = -1;
        this.MAX = 5;
        this.a = Array(this.MAX).fill(0);
    }

    isEmpty() {
        return (this.t < 0);
    }

    isFull() {
        return (this.t >= (this.MAX - 1))
    }

    push(x) {
        if (this.isFull()) {
            return false;
        }
        else {
            this.t += 1;
            this.a[this.t] = x;
            //document.write(x + 'pushed into stack <br/>')
            console.log(x + ' pushed into stack')
            return true;
        }

    }

    //fungsi pop
    pop() {
        if (this.t < 0) {
            return 0;
        } else {
            var x = this.a[this.t];
            this.t -= 1;
            return x;
        }
    }

    //tampilkan tumpukan 
    view() {
        const getView = document.getElementById('tampil');
        const alert = document.getElementById('alert-overflow')
        const info = alert.querySelector('.alert-info')
        const danger = alert.querySelector('.alert-danger')
        var viewData = [];
        getView.innerHTML = '';
        info.style.display = 'none';
        danger.style.display = 'none';
        for (var i = this.t; i > -1; i--) {
            viewData[i] = `<li  class="list-group-item">` + this.a[i] + `</li>`;
            getView.innerHTML += viewData[i];
        }

        if (this.isEmpty()) {
            info.style.display = 'block';
        }
        if (this.isFull()) {
            danger.style.display = 'block';
        }
    }
}



