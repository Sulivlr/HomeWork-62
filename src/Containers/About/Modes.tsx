import React from 'react';

const Modes = () => {


  return (
    <div className="container-lg">
      <div>
        <h1 className="mt-5">Unrated</h1>
        <p className="fs-4 fst-normal">In the standard non-ranked mode, the match is played as best of 25 - the first
          team to win 13 rounds wins the
          match. The attacking team has a bomb-type device called the Spike. They must deliver and activate the Spike on
          one of the multiple specified locations (bomb sites). If the attacking team successfully protects the
          activated Spike for 45 seconds it detonates, destroying everything in a specific area, and they receive a
          point.[5] If the defending team can deactivate the spike, or the 100-second round timer expires without the
          attacking team activating the spike, the defending team receives a point.[13] If all the members of a team are
          eliminated before the spike is activated, or if all members of the defending team are eliminated after the
          spike is activated, the opposing team earns a point.[5] If both teams win 12 rounds, sudden death occurs, in
          which the winning team of that round wins the match, differing from overtime for competitive matches.
          Additionally, if after 4 rounds, a team wishes to forfeit that match, they may request a vote to surrender. If
          the vote reaches 4 (in contrast to 5 for competitive), the winning team gets all the victory credit for every
          round needed to bring them to 13, with the forfeiting team receiving losing credit.[14] A team gets only three
          chances to surrender: once in the first half, once in the pistol round of the second half, and once more in
          the second half.</p>
      </div>
      <div className="mt-5">
        <h1>Competitive</h1>
        <p className="fs-4 fst-normal">Competitive matches are the same as unranked matches with the addition of a win-based ranking system that
          assigns a rank to each player after 5 games are played. Players are required to reach level 20 before playing
          this mode.[17][better source needed] In July 2020, Riot introduced a "win by two" condition for competitive
          matches, where instead of playing a single sudden death round at 12-12, teams will alternate playing rounds on
          attack and defense in overtime until a team claims victory by securing a two-match lead. Each overtime round
          gives players the same amount of money to purchase guns and abilities, as well as approximately half of their
          ultimate ability charge. After each group of two rounds, players may vote to end the game in a draw, requiring
          6 players after the first set, 3 after the second, and thereafter only 1 player to agree to a draw. The
          competitive ranking system ranges from Iron to Radiant. Every rank except for Radiant has 3 tiers.[18][better
          source needed] Radiant is reserved for the top 500 players of a region, and both Immortal and Radiant have a
          number associated to their rank allowing players to have a metric in which they can compare how they rank up
          to others at their level.[19]</p>
      </div>
      <button className="btn btn-primary mb-5">Next Page</button>
    </div>
  );
};

export default Modes;