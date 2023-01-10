WHAT I WOULD OF DONE DIFFERENTLY:

Seeing how big this app has become, I would of taken a different route and instead of conditionally rendering the 3 components (YouTubeVids, SearchPage & VideoPage), I would of used React router.

Also, I realise there is a lot of logic in my App component and I've lifted state from multiple different components through App so it can be used where it is needed. I wouldn't of needed to lift state many times and could of written this app more efficiently had I used the useContext hook.

In the VideoPage folder, there is a VideoCard component which has pretty much the same logic as the YouTubeCard component, in hindsight I should of made YouTubeCard more dynamic so in turn I could re-use it where I display VideoPage.

All in all, as this is my first solo React project I am very happy with the outcome and I have learnt a great deal from this project. I've improved as a developer whilst on this project and now the only way is upwards!

Happy coding!
