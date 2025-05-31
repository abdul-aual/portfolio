import React from 'react';
import './showoff.css';
import TypeImg from './type.png';
import codeforces from './codeforces.png';

const Showoff = () => {
    return (
        <div className='showoff-container'>
            <h2>Ha Ha Ha!!! Show off???</h2>
            <p>Not exactly.This is my comfort zone; where I will share my fileds of interest and showcase my skills.</p>
            <h3>1. Typing(!)</h3>
            <p>This may sound funny, but I’m fond of typing. I started my typing journey back in Class Three (2010), just pressing the right and left arrow keys, the spacebar, and control buttons while playing Nitronic Rush.
As I grew older, I saw some people typing incredibly fast—it amazed me! I thought, “Wow! How fast they are!” From that moment, I dreamed that one day I would type like them.
Over time, with lots of practice, I’ve become much better. In fact, I’m now a two-time runner-up in my university’s typing competition.
Here are some screenshots of my typing statistics.</p>

<div className="type-statistics-img">
<img src={TypeImg} alt="typing graph" srcset="" />
<p id='caption-one'> Fig 1: Typing Statistics (From: https://10fastfingers.com/)</p>
</div>

<div className="programming-part">
<h3>2. Programming(!!)</h3>
<p>
  I’m not a pro yet, but I aspire to be one. While I may not be an expert now, I’m building my strength through regular practice. In this field, consistency is my most powerful asset to succeed. In shaa Allah, one day I’ll prove myself.
</p>
<p>
  I’ve solved nearly 100 basic problems on the platform <strong>Beecrowd</strong>. After that, I shifted to <strong>Codeforces</strong> to challenge myself further. Below is a screenshot showing my Codeforces statistics. <strong>[As of 31 May 2025]</strong>
</p>
<div className="type-statistics-img">
<img src={codeforces} alt="programming graph" srcset="" />
<p id='caption-one'> Fig 2:Codeforces Statistics (From: https://codeforces.com/)</p>
</div>
</div>

        </div>
    );
};

export default Showoff;