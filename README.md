# DIGF6039 - Web + Mobile System Design
## OCAD University - Finlay Braithwaite
### Assignment C - Motion Collection
I've created five animations under the theme of the observer effect. Put simply, through the act of observing, the observer has an impact on that being observed. The following animations all have a playful and somewhat tangential connection to this phenomenon.
#### Francine in Wonderland
I was inspired by Diana Smith's amazing work with CSS, where she transforms html DIVs into hyperrealistic oil paintings through CSS. I modified elements of her work in my exploration of CSS and animation. Hovering over different elements of the piece triggers grotesque yet hilarious transformations.

Music is *Ice Castles* by Ween.
#### Lazy-Eye Tony
Tony was a quick sketch I made using p5.js for an earlier course, Creation and Computation. The eyeballs track your movements on the page, but poor Tony's left-eye (our right) seems to be a bit lazy. This effect is created using a simple easing function. For this iteration, I made Tony responsive to the browser size. This not only includes Tony's dimensions; Tony's stroke width and corner radius also responds to the overall size of the browser window.
```
    strokeCALC = windowWidth * windowHeight / 80000;
    radius = windowWidth * windowHeight / 24000;
```
Music is *Countdown at 6* by electronic music pioneers Perrey and Kingsley.

#### Another Dimension
I had a blast one evening, painting the town every colour using anime.js. It all started with a single div and a rudimentary animation. I explored the power of the div indexes, allowing me to apply a function to treat divs with the same class differently based on whatever creative math I was feeling at the moment. For example here is a delay component of one animation that is based on the divs index in the DOM.
```
        delay: function(target, index) {return index * 20 * Math.PI;},
```
Music is *Out of Space* by The Prodigy.

#### Microspace
*Another Dimension* is quite angular and sharp with overwhelming detail. I focused on a smaller section of the animation and softened the square divs into ellipses. After playing with the timing and movement in anime.js I applied an overall blur that animates. This is evocative of focusing a microscope. 

Music is *Monument* by Robyn and Röyksopp.

#### Evil Twin

This is a flippant combination of *Tony* and *Another Dimension*. I wanted to explore merging p5.js assets into a functioning html/css space.

Music is *Evil Twin* by Modeselektor.






