import React from 'react';
import icon from '../img/icon.png'

export default function Hero() {
  return (
    <section class="hero is-large is-dark">
      <div class="hero-body">
        <div className='columns is-centered'>
          <div className='column my-auto'>
            <h1 class="title"> Hello I'm Hannah Obote </h1>
            <h3 class="subtitle"> an aspiring Fullstack Developer</h3>
            <button class="button is-light mx-3" href='https://linkedin.com/in/hannah-obote-61110619a'>Linkedin</button>
            <button class="button is-light mx-3" href='https://github.com/Hannahobote'>Github</button>
            <button class="button is-light mx-3" href='https://mail.google.com/mail/?view=cm&fs=1&to=hannah.obote@gmail.com'>email</button>
          </div>
        </div>
      </div>
    </section>
  );
}
