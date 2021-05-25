class ProgressBar{
    constructor(){
        this.element = this.createElement();
        this.body = document.querySelector('body');
        this.body.appendChild(this.element);
        this.bodyHeight = this.getBodyHeight();
        this.scrollMax = this.countScrollHeight();
        
    }

    createElement(){
        this.element = document.createElement('div');
        this.element.classList.add('progress');
        this.element.innerHTML = `
        <div class="progress__bar"></div>
        `
        return this.element;
    }

    getBodyHeight(){
        return this.body.offsetHeight;
    }

    countScrollHeight(){
        this.scrollMax = this.bodyHeight - window.innerHeight;
        return this.scrollMax;
    }

    getCurrentPos(){
        this.currentPos = window.scrollY;
        return this.currentPos;
    }

    getPercentagePos(){
        this.currentPos = this.getCurrentPos();
        this.percentage = this.currentPos / this.scrollMax * 100 ;
        return this.percentage;
    }

    setElementWidth(currentPos){
        this.element.querySelector('.progress__bar').style.width = `${currentPos}%`;

    }


    Listener(){
        window.addEventListener('scroll', () =>{
            this.getPercentagePos();
            this.setElementWidth(this.percentage);
        })
    }

}

const progressBar = new ProgressBar();
progressBar.Listener()