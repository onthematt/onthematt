var onthematt = []
onthematt[0] = "<h1>Uncomfortable silences.</h1>Why do we feel it's necessary to yak about bullshit in order to be comfortable?<br><br> That's when you know you've found somebody special. When you can just shut the fuck up for a minute and comfortably enjoy the silence.<br><br>#guessthemovie";
onthematt[1] = "<h1>Reckless behaviour.</h1>Kids opening every window of the advent calendar on December 1st is everything that's wrong with the world.<br><br>#discipline #patience";
onthematt[2] = "<h1>Creativity.</h1>So your idea wasn't any good.<br><br>It's ok, move on. There will be others.<br><br>#keeponknocking";
onthematt[3] = "<h1>You haven't changed.</h1>However old you are, play the game you remember playing most on the playground at school.<br><br>You haven't changed that much.<br><br>#bigkids";
onthematt[4] = "<h1>Pointless.</h1>If you can't see the point, perhaps you're missing it.<br><br>Do you see my point? <br><br>#openyoureyes";
onthematt[5] = "<h1>Say what you mean.</h1>We're all let off the hook too often for not keeping our word or saying how we really feel.<br><br>Help yourself to <i>anything.</i><br><br>I'll be there in <i>literally</i> five minutes.<br><br>Both things I've said and not really meant.<br><br>Are you sorry you were too busy or were the things you were doing just more important?<br><br>Doing what you say you're going to do is about more than making plans.<br><br>#keepyourword";
onthematt[6] = "<h1>The donkey work.</h1>Most people concur the majority of their work life isn't spent working. It's spent tidying up, attending meetings, keeping the peace.<br><br>If this is the case, it doesn't make sense to lose sleep over automation.<br><br>Let the machines be our friends. Just like the Donkey.<br><br>#donkeywork";
onthematt[7] = "<h1>Effort.</h1>You say you'll give 110%?<br><br>110 is impossible but even 100 is all in. No room for anything else. No downtime. No balance.<br><br>You can do a lot with 80% so long as you're clear it's not 100.<br><br>Keep 20 in the tank for finishing early. One more cookie. One less rep.<br><br>Instead of being full of shit, why not offer the 50% you're actually giving?<br><br>#effort";
onthematt[8] = "<h1>Help a brother out.</h1>Lend somebody you don't know very well a few quid and watch their true colours shine! <br><br>#cashflow";
onthematt[9] = "<h1>You don't know.</h1>You don't know how much you don't know.. because you don't know!<br><br>#ignoranceisbliss";
onthematt[10] = "<h1>Bathroom struggles.</h1>Ten urinals, five sinks, one hand dryer.<br><br>What the fuck.<br><br>#weeandwait";
onthematt[11] = "<h1>You're welcome.</h1>There's an irony in a man who has sent postcards all his life so strongly resisting the connectedness of social media.<br><br>It's good to be connected.<br><br>#keepintouch";
onthematt[12] = "<h1>Collective responsibility.</h1>Some say the NHS needs more money to support mental health.<br><br>After all, money will fix the problem, right?<br><br>I'd rather the NHS didn't get involved and make everything colour-coded, slow and expensive.<br><br>Let's try being kinder to each other and save the NHS a job.";
onthematt[13] = "<h1>National pride.</h1>It's great to be proud of your country but don't be so proud that you forget you're capable of being a piece of shit too.<br><br>#brexit"
onthematt[14] = "<h1>Don't go away mad.</h1>Just go away.<br><br>#movingon"
onthematt[15] = "<h1>99 problems.</h1>If you stopped with your imaginary problems and starting finding solutions you soon find your problems aren't problems anymore.<br><br>#chillout"
onthematt[16] = "<h2>Speed, quality, price.</h2>Pick two.<br><br>#compromises<br><br>"
onthematt[17] = "<h2>What's my last price?</h2>The last price is the best price and the best price is the last price. <br><br>The <i>best offer</i> is the <b>last price.</b> <br><br>Make an offer, dumbie. <br><br>#negotiation #buttermeup<br><br>"
onthematt[18] = "<h2>Risk.</h2>The people who talk boldly about risk are those for whom it has already paid off.<br><br>#stickortwist<br><br>"
onthematt[19] = "<h2>Personality.</h2>An amalgamation of my experiences.<br><br>#whoareyou?"

function onTheMatt() {
	var randomPost = Math.floor(Math.random()*(onthematt.length));
	document.getElementById('blogpost').innerHTML = onthematt[randomPost];
}


