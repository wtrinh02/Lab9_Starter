import MassiveError from './extend-error.js';
   
    //Implementing Track JS with Custom Error
    try {
      const { fixedError } = require('../fixedError.js');
    } catch (Error) {
      const buttons = document.querySelector('#error-btns');
      const mErrorButton = document.createElement('button');
      mErrorButton.textContent = 'Need to fix the Massive Error!';
      mErrorButton.addEventListener('click', () => {
        console.log('Need fixing, Massive Error!');
        TrackJS.track('I can\'t fix this Errror!!!');
        throw new MassiveError('Could not find cannotfind.js. Program will run without it.');
      });
      buttons.appendChild(mErrorButton);
    }


    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      let finalNum;

      //Try Catch Block to check if inputs are valid
      try {
        finalNum = eval(`${firstNum} ${operator} ${secondNum}`);
      } catch (Error) {
        finalNum = 'Error: Invalid Inputs';
        throw new Error(`Invalid inputs: ${firstNum} and ${secondNum}`);
      } finally {
        output.innerHTML = finalNum;
      }
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish
    
    // Console Log Button
    let log_button = document.getElementsByTagName('button');
    log_button[1].addEventListener('click', function() {
      console.log('Console Log Demo');
    });

    //Console Error Button
    let error_button = document.getElementsByTagName('button');
    error_button[2].addEventListener('click', function(){
      console.error('Console Error Demo');
    });

    //Console Count Button
    let count_button = document.getElementsByTagName('button');
    count_button[3].addEventListener('click', function() {
      console.count('Count Button');
    });

    //Console Warn Button
    let warn_button = document.getElementsByTagName('button');
    warn_button[4].addEventListener('click', function() {
      console.warn('Console Warn Button');
    });

    //Console Assert Button
    let assert_button = document.getElementsByTagName('button');
    assert_button[5].addEventListener('click', function() {
      let number = 1;
      let y = 2;
      let errorMsg = number + " does not equal " + y;
      console.assert(number == y,{number, errorMsg});
    });

    //Console Clear Button
    let clear_button = document.getElementsByTagName('button');
    clear_button[6].addEventListener('click', function() {
      console.clear();
    });

    //Console Dir Button
    let dir_button = document.getElementsByTagName('button');
    dir_button[7].addEventListener('click', function() {
      console.dir(document.head);
    });

    //Console DirXML Button
    let dirxml_button = document.getElementsByTagName('button');
    dirxml_button[8].addEventListener('click', function() {
      console.dirxml(document);
    });

    //Console Group Start Button
    let groupStart_button = document.getElementsByTagName('button');
    groupStart_button[9].addEventListener('click', function() {
      console.group();
    });

    //Console Group End Button
    let groupEnd_button = document.getElementsByTagName('button');
    groupEnd_button[10].addEventListener('click', function() {
      console.groupEnd();
    });

    //Console Table Button
    let table_button = document.getElementsByTagName('button');
    table_button[11].addEventListener('click', function() {
      var Pokemon = [
        {
          Pokemon: 'Squirtle',
          Type: 'Water',
        },
        {
          Pokemon: 'Charmander',
          Type: 'Fire',
        },
        {
          Pokemon: 'Bulbasaur',
          Type: 'Grass',
        }
      ];
      console.table(Pokemon);
    });

    // Timer Start Button
    let startTimer_button = document.getElementsByTagName('button');
    startTimer_button[12].addEventListener('click', function() {
      console.time('Timer Button');
    });

    //Timer End Button
    let endTimer_button = document.getElementsByTagName('button');
    endTimer_button[13].addEventListener('click', function() {
      console.timeEnd('Timer Button');
    });

    //Console TraceButton
    let trace_button = document.getElementsByTagName('button');
    trace_button[14].addEventListener('click', function() {
      const go = () => { set(); };
      const set = () => { get(); };
      const get = () => { ready(); };
      const ready = () => { console.trace(); };
      go();
    });

    //Trigger a Global Error Button
    let trigger_button = document.getElementsByTagName('button');
    trigger_button[15].addEventListener('click', function() {
      throw new Error('This is a big error.');
    });

    window.addEventListener('error', function() {
      console.log('Error Detected!');
    });