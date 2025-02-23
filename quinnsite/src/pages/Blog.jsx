import React from 'react';
import Navbar from '../components/Navbar';
import useModal from '../hooks/useModal';
import './Blog.css';
import Header from '../components/Header';

const Blog = () => {
    useModal();

    return (
        <div id="root">
             <Header/>
             <Navbar />

            <section id="blog">
                <h2>Blog</h2>
                <div className="blog-post">
                    <h3 id="boardgame">How I Used ChatGPT to Help Me Design a Board Game</h3>
                
                    <h4>Background</h4>
                    <p>
                        I'm a reasonably avid board gamer and frequently play with my friends. 
                        A while back, I had an idea for a board game that I thought would be fun and also allowed me to gamify some
                        of the theories I've encountered while reading political science papers. 
                    </p>
                    <p>
                        The central idea I wanted to explore in the game was tensions within the executive branch and the effect of delegating power.
                        I wanted to create a game where the president would play a major role but not be able to determine the course of the government alone.
                    </p>
                    <p>
                        Instead, the president in the game would have to work with other players, representing cabinet ministers, to achieve their goals, 
                        and the other players would have to work with the president to achieve theirs.
                    </p>
                    <p>
                        From that, I had an idea of how to represent this mechanically. The game would be set during a reform period in a fictional country, 
                        and the players would be trying to pass reforms that would benefit their faction. The president would have the power to propose reforms,
                        but the ability to pass them would be determined by the support of the other players. 
                    </p>
                    <p>
                        This setup would provide the workings of a social game like *Werewolf* or *Secret Hitler*, but I wanted to change things a bit and add more
                        concepts like institutional power. As such, I decided to split government powers into different institutions. Each player would play the role of a minister controlling 
                        a different institution, and the president would have to work with them to pass reforms. The president would have the power to propose reforms,
                        but the ability to pass them would depend on the support from institutions.
                    </p>
                    <p>
                        To add an element of plausible deniability of alignment, as well as to increase the complexity of voting, I had an idea: use cards to represent 
                        institutional support. I'd tie the power of institutions to their voting ability—for example, a 3-power card could only be played if the respective institution had that power.
                    </p>
                
                    <h4>Using ChatGPT as Part of Game Design</h4>
                
                    <p>
                        With my main ideas for how the game could run, I thought it would be nice to get some feedback. Though, as a player, it's tough to 
                        describe a game without ever playing it. As such, I decided to use ChatGPT to help me design the game. 
                        I wrote a prompt describing the game and then asked ChatGPT for its thoughts.
                    </p>
                    <p>
                        Describing the basic mechanics was a bit lengthy, but I ended with a question about what ChatGPT thought of the idea.
                    </p>
                    <div className="image-grid">
                        <img src="images/blogpost1/b1p1.png" alt="the question" className="lightbox" />
                    </div>
                    <p>
                        The response included the following:
                    </p>
                    <div className="image-grid">
                        <img src="images/blogpost1/b1p2.png" alt="the first response" className="lightbox" />
                    </div>
                
                    <p>
                        I was happy to see from the start that ChatGPT "understood" the themes of the game. 
                        It also pitched some ideas, including some I was already considering. This was a good sign to me that I could use it to bounce 
                        mechanics off of and see if they were fun. For the next while, my exchanges looked like the following:
                    </p>
                    <div className="image-grid">
                        <a href="#img1"><img src="images/blogpost1/mechanics_discussion1.PNG" alt="Image 1" /></a>
                        <a href="#img2"><img src="images/blogpost1/mechanics_discussion2.PNG" alt="Image 2" /></a>
                        <a href="#img3"><img src="images/blogpost1/mechanics_discussion3.PNG" alt="Image 3" /></a>
                        <a href="#img4"><img src="images/blogpost1/mechanics_discussion4.PNG" alt="Image 4" /></a>
                    </div>
                
                    <p>
                        For this project, I wanted the theme to be felt through game mechanics. I also wanted to avoid redundancy with existing
                        games. As such, I started to ask ChatGPT questions about how the title sounded, similar games, and how the decks I was designing "felt."
                    </p>
                    
                    <div className="image-grid">
                        <a href="#img1"><img src="images/blogpost1/theme_discussion1.PNG" alt="Image 1" /></a>
                        <a href="#img2"><img src="images/blogpost1/theme_discussion2.PNG" alt="Image 2" /></a>
                        <a href="#img3"><img src="images/blogpost1/theme_discussion3.PNG" alt="Image 3" /></a>
                        <a href="#img4"><img src="images/blogpost1/theme_discussion4.PNG" alt="Image 4" /></a>
                    </div>
                
                    <p>
                        As a history nerd, I also wanted the game to be evocative. I had fun seeing if ChatGPT could analyze various components of the game
                        and detect inspiration from historical events. I intended a generalizable political model while designing the game but 
                        felt the theme most closely resembled a dictatorship undergoing reform. I was pretty happy with the responses I got.
                    </p>
                
                    <div className="image-grid">
                        <a href="#img1"><img src="images/blogpost1/historical_references1.PNG" alt="Image 1" /></a>
                        <a href="#img2"><img src="images/blogpost1/historical_references2.PNG" alt="Image 2" /></a>
                        <a href="#img3"><img src="images/blogpost1/historical_references3.PNG" alt="Image 3" /></a>
                    </div>
                
                    <p>
                        Throughout this process, I found it quite fun to bounce off ideas and get quick feedback. ChatGPT definitely has some 
                        biases, but with a bit of guidance, I found I could get useful feedback. It was nice to see the AI detect the themes I was trying to evoke and 
                        understand the strategies I intended players to use. At this point, I had my next idea: I could use ChatGPT to help me playtest the game.
                    </p>
                
                    <h4>Playtesting with ChatGPT</h4>
                    <p>
                        Playtesting is a key part of any board game's development and also a pretty time-consuming one. As such, I thought it would be nice to
                        simulate multiple players and see how they would react to the game. Given that ChatGPT had already been run through the various aspects 
                        of the game, understood the deck, and had discussed strategy, I thought it might be possible to simulate the game
                        and ideally analyze aspects like balance through playthroughs.
                    </p>
                    <p>
                        With that in mind, I decided to start with a simple prompt asking it to simulate the game.
                    </p>
                    <div className="image-grid">
                        <img src="images/blogpost1/sim1.PNG" alt="" />
                    </div>
                    <p> 
                        Immediately, a few things stood out to me. The simulation did not follow the rules or the setup of 
                        the game (institutions are supposed to start at 3 strength and then decrease to 1 or increase to 5). Stability is supposed to 
                        start at 5 and reform progress at 4. The turns were also not progressing in the correct order (the president selects reforms, 
                        which the cabinet then supports or opposes).
                    </p>
                    <p>
                        As such, I decided to slow-walk the process. Rather than asking for a full simulation, I asked for the first part of the first turn,
                        then the second part, and so on.
                    </p>
                    <div className="image-grid">
                        <img src="images/blogpost1/sim2.PNG" alt="" />
                        <img src="images/blogpost1/sim3.PNG" alt="" />
                    </div>
                    <p>
                        This was a bit more helpful. It was able to assign and track allegiances but still ignored how cabinet roles worked. From this point,
                        I hoped to teach ChatGPT how to play the game by correcting it step by step.
                    </p>
                    <div className="image-grid">
                        <a href="#img1"><img src="images/blogpost1/sim4.PNG" alt="Image 1" /></a>
                        <a href="#img2"><img src="images/blogpost1/sim5.PNG" alt="Image 2" /></a>
                        <a href="#img3"><img src="images/blogpost1/sim6.PNG" alt="Image 3" /></a>
                        <a href="#img4"><img src="images/blogpost1/sim7.PNG" alt="Image 4" /></a>
                    </div>
                
                    <p>
                        While this new information was incorporated into the next simulation, ChatGPT continued to make mistakes 
                        in each phase, with some errors reappearing later.
                    </p>
                    <p>
                        As an interesting aside, one observable bias of ChatGPT was its tendency to roleplay. For example, it would assign communists and capitalists to ministries 
                        stereotypically associated with them (e.g., making the economy minister a capitalist). It also struggled to simulate the concept of cards in hand, or that cabinet ministers
                        could play cards from ministries that weren't their own.
                    </p>
                    <p>
                        After some time, I still wasn't getting the results I hoped for. While part of me is tempted to revisit this and enforce a stricter simulation, this begins to 
                        shift from using my game to test a ChatGPT project rather than using ChatGPT to aid my game project. As such, I decided to stop here and move on to other parts of the game design process.
                    </p>
                
                    <h4>Conclusion</h4>
                    <p>
                        Using ChatGPT to help design a board game was a fun experience. It was nice to bounce ideas off something and 
                        get instant feedback, even if it struggled with some of the game's rules. It was particularly useful and fun 
                        for exploring the game's themes, which it surprisingly identified well. Ironically, computing the game rules turned out to be the hardest part for ChatGPT to get right. 
                        This process clarified some of ChatGPT's biases and limitations and proved to be a helpful way to get quick feedback on a project. I would definitely consider using it again in the future.
                    </p>
                </div>
                <div id="image-modal" className="modal">
                    <span id="close-modal">&times;</span>
                    <img id="modal-image" src="" alt="Expanded Image" />
                </div>    
            </section>
        </div>
    );
};

export default Blog;