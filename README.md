# worldcup
Sportradar worldcup React app v18.2.0


## Development server
We use Vite (v3.1.0) instead of webpack (way faster...)

Run `pnpm dev` for a dev server `(beware the first p in pnpm)`. Navigate to `http://localhost:5174/`. The app will automatically reload if you change any of the source files.


![image](https://user-images.githubusercontent.com/16287358/194919230-7e6d941c-7837-4fd3-ac6b-987b49516b61.png)
As this is such a simple solution, we are able to start a game by clicking in the buttons and a Dialog appears. It is NOT possible to have two games in parallel, so once a match starts, 
it is not possible to start another one, you will need to finish one to start another; as in real worldcup. 

Teams can score goals by clicking the `GOAL` button. And the match finishes by clicking the `END OF GAME` one. 

![image](https://user-images.githubusercontent.com/16287358/194919913-cd33126b-3f9f-4258-8316-207a64e4140a.png)

Now the finished matches will automatically desappear from the matches remaining (scoreboard) and will appear in Summary list.
![image](https://user-images.githubusercontent.com/16287358/194919964-fe8907b4-54cf-4835-a177-95beeec94ab6.png)



## NOTES
We are currently sorting the results by number of goals. As it is an array we really don't need to sort by date(timestamp) because we are pushing one at the time already in order.
	

It was decided to use redux instead of context (even though it is less quick in terms of development) because as said, this solution is too small but makes more sense as these 
two components will probably not be siblings. 
