enum DayOfTheWeek {
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN
}

enum OtherDayOfTheWeek {
  MON = 100,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
  SUN
}

let day: DayOfTheWeek;
day = DayOfTheWeek.FRI;

if (day === DayOfTheWeek.FRI){
    console.log('Weekend starts');

}
    