#include <Nokia_LCD.h>
#include "ngu.h"
#include "rickimg.h"
Nokia_LCD lcd(13 /* CLK */, 12 /* DIN */, 7 /* DC */, 10 /* CE */, 9 /* RST */, 8 /* BL */);

//SONG INTS
int tempo = 124;
int buzzer = 11;
// sizeof gives the number of bytes, each int value is composed of two bytes (16 bits)
// there are two values per note (pitch and duration), so for each note there are four bytes
int notes = sizeof(melody) / sizeof(melody[0]) / 2;
// this calculates the duration of a whole note in ms
int wholenote = (60000 * 4) / tempo;
int divider = 0, noteDuration = 0;


//CLOCK
unsigned long prevbuzz = millis();
long timebuzz = 1000;

void setup() {
  lcd.begin();
  lcd.setBacklight(true);
  lcd.setContrast(52);  // Good values are usualy between 40 and 60
  // Clear the screen by filling it with black pixels
  lcd.clear(true);
  delay(2000);
}

void loop() {
    
  song();
}

void disp(){

  // Draw the platis.solutions logo on your screen
  lcd.draw(r1,
           sizeof(r1) / sizeof(r1[0]),
           true);
  delay(1000);
  lcd.draw(r2,
           sizeof(r2) / sizeof(r2[0]),
           true);
  delay(1000);
  lcd.draw(r3,
           sizeof(r2) / sizeof(r2[0]),
           true);
  delay(1000);
  lcd.draw(r2,
           sizeof(r2) / sizeof(r2[0]),
           true);             
  delay(1000);
}

void song(){
  int nvg = 0, nvgf = 0;
   // iterate over the notes of the melody.
  // Remember, the array is twice the number of notes (notes + durations)
  for (int thisNote = 0; thisNote < notes * 2; thisNote = thisNote + 2) {
    nvg=nvg+1;
    nvgf = nvg % 4;
    // calculates the duration of each note
    divider = melody[thisNote + 1];
    if (divider > 0) {
      // regular note, just proceed
      noteDuration = (wholenote) / divider;
    } else if (divider < 0) {
      // dotted notes are represented with negative durations!!
      noteDuration = (wholenote) / abs(divider);
      noteDuration *= 1.5; // increases the duration in half for dotted notes
    }

    // we only play the note for 90% of the duration, leaving 10% as a pause
    tone(buzzer, melody[thisNote], noteDuration * 0.98);

    // Wait for the specief duration before playing the next note.
    
    if(nvgf ==0){
      // Draw the platis.solutions logo on your screen
      lcd.draw(r1,
               sizeof(r1) / sizeof(r1[0]),
               true);
    }else if(nvgf==1 or nvgf == 3){
      lcd.draw(r2,
              sizeof(r2) / sizeof(r2[0]),
              true);
    }else{
      lcd.draw(r3,
              sizeof(r2) / sizeof(r2[0]),
              true);
    }
    while (true){
      unsigned long currentTime = millis();
      if(currentTime - prevbuzz > noteDuration) {
        prevbuzz = currentTime;
        break;
      }
    }
    // stop the waveform generation before the next note.
    noTone(buzzer);
  }
  }
