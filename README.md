# Welcome to Project One - "The PokeDex"


<center>

## Introduction

</center>
Welcome to Guru Gainz, where influencers (gurus) and the influenced alike can come together in order to achieve their fitness goals (gainz).

<center>

## Team Members

</center>
<center>

> [Matthew Slanaker](https://github.com/MSlanaker)

> [Zach Bednarek](https://github.com/zachbednarek)

> [Lance Bailey](https://github.com/lancebailey26)

> [CJ Trahey](https://github.com/cjtrahey)

</center>
<center>

## Product

</center>

* [Guru Gainz](link) was born out of an idea after noticing a trend with both YouTubers and Instagram influencers - they rarely interact with their communities in ways that truly benefit those initiating the interactions. Instead, oftentimes those "responded" to are merely chosen and highlighted in order to bolster the influencer's image. We saught to create a level playing field. We created a platform where both fitness influencers and fitness newbies can join together as one in order to talk about their fitness goals.

<center>

## Solution

</center>

* Our solution was creating a vitual space where both influencer and the influenced can interact with one another as equals. We accomplished this by creating an open journal of those who wish to share their fitness gains for everyone in the community to see. The application also provides tailor-made routines made for the user in order to boost their gains even further.

<center>

## Concept

</center>

* The user creates a login profile by providing an email address and a password.
*  The user is then directed to the home page, where they can select from three options - posting an update, seeing pre-made routines, and the user's profile.
* When the user posts an update, they can broadcast an update of their fitness goals to the page.
* When the user goes to their "For You Page", they are presented with a workout routine that they can incorporate into their routine for that day.
* When the user goes to their profile, they can review their posts made.
<p>
<br>
As a group, we believe that fitness entheusiasts looking to meet their fitness goals should be able to achieve them while being treated as equals by influential fitness gurus.

<center>

## User Story

</center>

* AS a fitness influencer
* I WANT TO share my fitness progress with my community 
* SO THAT I can communicate with my followers while giving them proper validation as an equal.

<p>
<br>

* AS a fitness fledgling
* I WANT TO share my fitness to the community that I joined
* SO THAT I can get better feedback and advice from those in the know.


<center>

## Simplified Mechanics

</center>

* This project was relatively simple in terms of concept, but much more difficult to execute in practice. 
* Essentially, there are two API calls happening at the same time, both pulling from the entry the user makes. For example, an entry of "Shuckle" would create a data call for both the entry stats of the species and the competitive data for it.
<p>
<br>
The following script excerpts are what generates the PokeDex entry and the base stats of the entered Pokemon:

```
//This Function calls for the basic entry for the Pokemon

var generalPokedex = function (pokemon) {
    var pokeApi = 'https://pokeapi.co/api/v2/pokemon-species/'+pokemon+'/';

    fetch(pokeApi)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);
                    
                    const entry = data.flavor_text_entries.find(fte=>fte.language.name ==='en')
                    console.log(entry)

                    
                })
            }
        })
    }

```

```

// This function calls for the species' base stats

var Stats = function (pokemon) {
    var baseStats = 'https://pokeapi.co/api/v2/pokemon/'+pokemon+'/';

    fetch(baseStats)
        .then(function (response) {
            if (response.ok) {
                console.log(response);
                response.json().then(function (data) {
                    console.log(data);

                var hp = Number(data.stats[0].base_stat);

                var attack = Number(data.stats[1].base_stat);

                var defense = Number(data.stats[2].base_stat);

                var special_att = Number(data.stats[3].base_stat);

                var special_def = Number(data.stats[4].base_stat);

                var speed = Number(data.stats[5].base_stat);
                // creates base stat total from stat values obtained from api
                var bst = hp + attack + defense + special_att + special_def + speed;

                var height = data.height;
                var weight = data.weight;

                var sprite = data.sprites.front_default;
```

<center>

## Technologies

</center>

The following technologies were used in the creation of this group project:
* HTML
* CSS
* JavaScript
* >[PokeAPI](https://pokeapi.co/)
* >[Smogon Usage API](https://smogon-usage-stats.herokuapp.com/)
* >[Semantic UI](https://semantic-ui.com/)

<center>

## Example

</center>
    
<p><br>
Wireframe proposal:
<p><br>
    
![image info](./assets/images/actual-wireframe.png)

<p><br>

Final Project:
<br>

![image info](./assets/images/app_photo_one_screen.png)


<center>

## Future Technologies

</center>

In the future, further development on this project would include:

* Background colors dynamically changing based on the Pokemon's typing (e.g. Pikachu's background being yellow because it is an Electric type.)

* Adding dropdown lists for search history and competitive tierings.

* Adding in-game background music to the website to further drive the "research" theme the PokeDex represents.

## Documentation

> [Slideshow Presentation](https://docs.google.com/presentation/d/1DJauHTWUznmujo3_CKTUlO700YPjpPNrnjOPGYvZL_M/edit?usp=sharing)

> [PokeAPI](https://pokeapi.co/)

> [Smogon Usage Stats](https://smogon-usage-stats.herokuapp.com/)
<p>
<br>
<center>
This app is not affiliated, endorsed or supported by Nintendo in any way, also some images used in this app are copyrighted and supported under fair use, Pokemon and Pokemon character names are trademark of Nintendo, no copyright infringement intended. Pokemon (C) 2002-2020 Pokemon.
</center>
        

