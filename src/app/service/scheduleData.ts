import { schedule } from "../interface/schedule";
import { team } from "../interface/team";

export const SEASON_SCHEDULE:schedule[] = [
    {id:1,playingDate:new Date(2021,08,10),HomeTeam: 'persija',
    AwayTeam: 'Bali United', HomeScore:3, AwayScore:2,
    RefName:'joko', notes:'pertandingan overtime' },
    {id:2,playingDate:new Date(2021,08,11),HomeTeam: 'EVOS',
    AwayTeam: 'persipon', HomeScore:2, AwayScore:6,
    RefName:'wasit', notes:'pertandingan hujan' },
    {id:3,playingDate:new Date(2021,08,13),HomeTeam: 'lion Kung',
    AwayTeam: 'kera samset', HomeScore:1, AwayScore:4,
    RefName:'kamijo genting', notes:'pertandingan penalty' },
    {id:4,playingDate:new Date(2021,08,15),HomeTeam: 'the man from hill',
    AwayTeam: 'the boy form west', HomeScore:1, AwayScore:0,
    RefName:'old town', notes:'pertandingan terdapat kecurangan' },
    {id:2,playingDate:new Date(2021,08,18),HomeTeam: 'Lasak',
    AwayTeam: 'Gasak', HomeScore:3, AwayScore:2,
    RefName:'nigsih haru putri', notes:'pertandingan aman jaya' },
]
export const TEAM:team [] = [
  {  id:1,name:'persija', type: 'over 30'},
   { id:2 ,name:'lion kung'  ,type: 'over 42'},
    {id:3 ,name:'lasak'  ,type: 'over 36'},
    {id:4 ,name:'kera samset'  ,type: 'over 30'},
    {id:5 ,name:'evos'  ,type: 'over 30'},
    {id:6 ,name:'persipon'  ,type: 'over 30'},
    {id:7 ,name:'bali united'  ,type: 'over 30'},
    {id:8 ,name:'the man from hill'  ,type: 'over 30'},
    {id:9 ,name:'gasak'  ,type: 'over 30'},
    {id:10 ,name:'the boy from west'  ,type: 'over 30'},
]