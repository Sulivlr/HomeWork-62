import React from 'react';
import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="container-lg">
      <h1 className="mt-5 ">Welcome To VALORANT</h1>
      <p className=" fs-4 fst-normal">Valorant is a free-to-play first-person tactical hero shooter developed and
        published by Riot Games, for Windows. Teased under the codename Project A in October 2019, the game began a
        closed beta period with limited access on April 7, 2020, followed by a release on June 2, 2020. The development
        of the game started in 2014. Valorant takes inspiration from the Counter-Strike series, borrowing several
        mechanics such as the buy menu, spray patterns, and inaccuracy while moving.</p>
      <div>
        <h1>Gameplay</h1>
        <p className="fs-4 fst-normal">
          Valorant is a team-based first-person tactical hero shooter set in the near future. Players play as one of a
          set of Agents, characters based on several countries and cultures around the world. In the main game mode,
          players are assigned to either the attacking or defending team with each team having five players on it.
          Agents have unique abilities, each requiring charges, as well as a unique ultimate ability that requires
          charging through kills, deaths, orbs, or objectives. Every player starts each round with a "classic" pistol
          and one or more "signature ability" charges. Other weapons and ability charges can be purchased using an
          in-game economic system that awards money based on the outcome of the previous round, any kills the player is
          responsible for, and any objectives completed. The game has an assortment of weapons including secondary guns
          like sidearms and primary guns like submachine guns, shotguns, machine guns, assault rifles and sniper rifles.
          There are automatic and semi-automatic weapons that each have a unique shooting pattern that has to be
          controlled by the player to be able to shoot accurately. It currently offers 24 agents to choose from. The
          player will get 5 unlocked agents when they create their account, and will have to unlock the rest of the
          agents by collecting an in-game currency called Kingdom Credits. Kingdom Credits can be acquired by playing
          games or completing daily and weekly tasks, and can be spent on unlocking new agents or cosmetic items.
          However, within the first 28 days of release, new Agents can only be unlocked with Valorant Points (VP), Agent
          Recruitment Events, or by having a linked and active Xbox Game Pass subscription. VP is an in-game currency
          that can only obtained by purchasing it with real money,[better source needed] and it can be spent on cosmetic
          items or new agents.
        </p>
      </div>
      <button className="btn btn-primary mb-5" onClick={() => navigate('/Modes')}>Next Page</button>
    </div>

  );
};

export default Home;