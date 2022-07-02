import React from 'react'
import { Navbar } from '../Components/Navbar'

export const Booking = () => {
    const booked = [
        {
          id: 1,
          movie_id: 2,
          name: "Sam", // it can be any string
          seat: "A2" // it can be any string
        }
      ]
      const movies = [
        {
          id: 1,
          title: "Doctor Strange in the Multiverse of Madness",
          original_language: "en",
          original_title: "Doctor Strange in the Multiverse of Madness",
          overview: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
          popularity: 10084.004,
          poster_path: "https://image.tmdb.org/t/p/original/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
          release_date: "2022-05-04",
          vote_average: 7.556,
          vote_count: 3749
        },
        {
          id: 2,
          title: "Blasted",
          original_language: "no",
          original_title: "Blasted - Gutta vs. Aliens",
          overview: "When a former childhood friend crashes Sebastian's bachelor party and makes it all about himself, only an alien invasion can make them put aside their bad blood and reunite as the kick-ass laser-tag duo they once were.",
          popularity: 21.055,
          poster_path: "https://image.tmdb.org/t/p/original/aEB9ogCBCUpSFTZVhD7NvTh44VW.jpg",
          release_date: "2022-06-22",
          vote_average: 5.727,
          vote_count: 11
        },
        {
          id: 3,
          title: "The Man From Toronto",
          original_language: "en",
          original_title: "The Man From Toronto",
          overview: "In a case of mistaken identity, the world’s deadliest assassin, known as the Man from Toronto, and a New York City screw-up are forced to team up after being confused for each other at an Airbnb.",
          popularity: 577.181,
          poster_path: "https://image.tmdb.org/t/p/original/5TdKvZimLSJHPQW8t3ctlsusnmH.jpg",
          release_date: "2022-06-24",
          vote_average: 6.145,
          vote_count: 162
        },
        {
          id: 4,
          title: "Minions: The Rise of Gru",
          original_language: "en",
          original_title: "Minions: The Rise of Gru",
          overview: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
          popularity: 1408.742,
          poster_path: "https://image.tmdb.org/t/p/original/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
          release_date: "2022-06-16",
          vote_average: 7.883,
          vote_count: 60
        },
        {
          id: 5,
          title: "Beauty",
          original_language: "en",
          original_title: "Beauty",
          overview: "A young singer on the brink of a promising career finds herself torn between a domineering family, industry pressures and her love for her girlfriend.",
          popularity: 11.138,
          poster_path: "https://image.tmdb.org/t/p/original/yjAXHyMz0JZzYiQP7q1fT5kXLif.jpg",
          release_date: "2022-06-11",
          vote_average: 7.222,
          vote_count: 9
        },
        {
          id: 6,
          title: "Top Gun: Maverick",
          original_language: "en",
          original_title: "Top Gun: Maverick",
          overview: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
          popularity: 1000.323,
          poster_path: "https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
          release_date: "2022-05-24",
          vote_average: 8.376,
          vote_count: 1355
        },
        {
          id: 7,
          title: "Thor: Love and Thunder",
          original_language: "en",
          original_title: "Thor: Love and Thunder",
          overview: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
          popularity: 820.608,
          poster_path: "https://image.tmdb.org/t/p/original/4zLfBbGnuUBLbMVtagTZvzFwS8l.jpg",
          release_date: "2022-07-06",
          vote_average: 6.889,
          vote_count: 9
        },
        {
          id: 8,
          title: "Fantastic Beasts: The Secrets of Dumbledore",
          original_language: "en",
          original_title: "Fantastic Beasts: The Secrets of Dumbledore",
          overview: "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
          popularity: 2818.865,
          poster_path: "https://image.tmdb.org/t/p/original/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
          release_date: "2022-04-06",
          vote_average: 6.841,
          vote_count: 2081
        },
        {
          id: 9,
          title: "Men",
          original_language: "en",
          original_title: "Men",
          overview: "In the aftermath of a personal tragedy, Harper retreats alone to the beautiful English countryside, hoping to find a place to heal. But someone — or something — from the surrounding woods appears to be stalking her, and what begins as simmering dread becomes a fully-formed nightmare, inhabited by her darkest memories and fears.",
          popularity: 94.504,
          poster_path: "https://image.tmdb.org/t/p/original/jo1Kv3P3UgDVk7JnUFr2Cl8WWUM.jpg",
          release_date: "2022-05-20",
          vote_average: 6.229,
          vote_count: 118
        }
      ]
      console.log(booked.movie_id);
  return (
    <div>
        <div>
            <Navbar />
        </div>
        <div>
            <h1 style={{textAlign:"center"}}>Booked Tickets</h1>
            <br /><br />
            <div style={{border:"1px solid black", width: "20%", textAlign:"center"}}>
                <h2>{movies[booked[0].movie_id-1].title}</h2>
                <h3>Name :- {booked[0].name}</h3>
                <h3>Seat number :- {booked[0].seat} </h3>
            </div>
        </div>
    </div>
  )
}
