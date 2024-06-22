import React from 'react';
import {useNavigate} from 'react-router-dom';

const Agents = () => {

  const navigate = useNavigate();

  return (
    <div className="container-lg">
      <h1 className="mt-5">Here is info About Agents</h1>
      <div>
        <p className="fs-4 fst-normal">Agents
          There are a large variety of playable agents available in the game. Agents are divided into 4 roles: Duelists,
          Sentinels, Initiators, and Controllers. Each agent has a different role which indicates how the agent is
          usually played.

          Duelists specialize in attacking and entering a bomb site for the team. Riot's official definition for
          duelists is "self-sufficient fraggers."[31] Duelists mainly create space for their team while entering onto a
          site, giving their teammates information, and making entering a site easier. Their abilities tend to consist
          of flashes which blind enemies, and movement-based abilities that allow for them to cover large distances
          faster than other agents. This type of ability kit allows for duelists to shine best when they are able to
          catch players off guard and get impact frags. On attack, duelists are most often expected to play forward,
          leading the attack. They are expected to be in front of everyone to get opening picks on enemies since their
          abilities often give them a competitive advantage when gunfighting an enemy. On defense, duelists will be
          holding choke points where enemies try to enter sites. Due to the mobility in their kits, they are able to get
          a pick and reposition, giving their team a numbers advantage.[32][better source needed]

          Sentinels are the defensive line, which specializes in locking down sites and protecting teammates from
          enemies. Their abilities mainly consist of static 'objects' that are obstacles to the enemies. These objects
          can give the team valuable information and/or deal damage. On attack, sentinels can use their abilities to cut
          off certain parts of the map or set up 'objects' that can ensure the enemy cannot flank without being noticed.
          On defense, sentinels can use their abilities to slow enemies from entering a site. This provides valuable
          time for the sentinels' team members to come and provide defensive support.[32][better source needed][11]

          Initiators plan out the offensive pushes. Initiators specialize in breaking through defensive enemy positions.
          Initiators' abilities can consist of flashes but also abilities that can reveal the location of enemies. This
          information allows for attackers to know where enemies are and make taking a site easier. On defense,
          initiators can use their abilities to provide information on where the attackers are going, as well as helping
          their teammates retake a lost site.[32][better source needed]

          Controllers specialize in "slicing up dangerous territory to set their team up for success."[31] They use
          their abilities to create coverage or clear out areas of space with crowd control. To help their team enter
          into enemy territory, their abilities consist of some kind of smoke, as well as molotovs, stuns, or flashes.
          With their smokes, controllers can control sightlines on the map, making it safer to move through the map
          without getting seen. On offense, controllers can smoke off certain sightlines and use their crowd control on
          common defensive spots to force enemies into the open. On defense, controllers can smoke and/or use crowd
          control on entryways to delay or discourage the enemy team from moving forward.</p>
      </div>
      <button className="btn btn-primary mb-5" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default Agents;