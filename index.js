let count = 0;

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');

saveEl.innerText += 0;

//increment function call
function increment() { 
    count += 1;
    if (count > 50) {
        alert("Theater limit reached!!");
    }
    else {
        countEl.innerText = count;
    }
}

//save function call
function save() {
    let currCount = count;
    if (count > 50) {
        saveEl.innerText = "Theater is fully occupied";
    }
    else {
        saveEl.innerText += '-' + currCount;
    }
}

//reset function call
function reset() {
    count = 0;
    countEl.innerText = count;
    saveEl.innerText = 'Theater Count: ' + count;
}


/*******************************************************************************
/*********************Below Code is not working*********************************
/*******************************************************************************

//Construtor function
function AudienceCounter() {
    this.count = count;
    
    this.countEl = document.getElementById('count-el');

    this.increment = function() { 
        this.count = this.count + 1;
        if (this.count > 50)
            alert("Theater limit reached!!");
        else 
            this.countEl.innerText = this.count;
        //return this.countEl.innerText;
    };

    this.saveEl = document.getElementById('save-el');

    this.save = function() {
        if (this.count > 50)
            this.saveEl.innerText = "Theater is fully occupied";
        else
            this.saveEl.innerText = 'Theater Count: ' + this.count;
        //return this.saveEl.innerText;
    };

    this.reset = function() {
        this.count = 0;
        this.countEl.innerText = this.count;
        this.saveEl.innerText = 'Theater Count: ' + this.count;
        //return this.saveEl.innerText;
    };
}

let count = 0;
//Object declaration
const audCounter = new AudienceCounter();

//Call increment function
audCounter.increment();
document.getElementById('count-el').innerText;

//Call save function
audCounter.save();
document.getElementById('save-el').innerText;

//Call reset function
audCounter.reset();

**********************************************************************/