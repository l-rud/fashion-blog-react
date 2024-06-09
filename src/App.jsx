import { useState } from 'react'
import './App.css'
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./components/Article";



function App() {
  return (
    <div>
      <Header />
      <main>
        <Article
          date="11/12/20"
          title="On the Street in Brooklyn"
          imageUrl="./assets/blog-image-1.jpg"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta vel voluptate necessitatibus accusantium
                sunt tenetur laboriosam, fugit nisi exercitationem mollitia, eius porro quas iusto eveniet fugiat
                distinctio. Voluptate distinctio fuga aperiam nisi veritatis odit neque. Fugiat, placeat hic maxime
                consectetur, voluptatem esse asperiores aliquid at neque reprehenderit eligendi quae iusto enim ullam
                exercitationem facilis in amet dolorem aliquam voluptas rerum impedit tenetur minus. Nemo rerum delectus
                quas saepe, ipsum voluptates quae autem optio vel consectetur quia sequi, consequuntur aliquid minima
                temporibus labore, voluptas at magni ullam. Deserunt dolore, ut quod necessitatibus est sunt iusto
                voluptate labore, nemo voluptatum quibusdam vitae quae repudiandae nulla aliquam excepturi repellat.
                Nisi qui molestiae quo quas error culpa nemo, architecto et minima. Atque dolorem architecto veniam
                quisquam labore praesentium modi dicta, facere accusantium neque dolores quas expedita dolor dignissimos
                at delectus aspernatur a temporibus est sint libero eum. Sed corporis aliquam rem quo esse, tempora
                voluptatem ad quidem maiores voluptatum debitis expedita accusantium. Dicta alias eaque ad! Facere
                aspernatur delectus similique quia nesciunt eos repellat veniam. Eveniet nihil non quisquam neque
                laboriosam, quam distinctio dolorum commodi assumenda blanditiis omnis officiis id ipsa? Voluptatum
                ipsum quibusdam delectus sit magnam quidem vel aspernatur, ducimus exercitationem error
                repudiandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus repudiandae dolorem
                corporis minus odit aperiam tenetur. Id earum laborum doloremque incidunt quam, labore dolores velit
                totam commodi eum ex voluptatum!"
        />
        <Article
          date="11/11/20"
          title="Vintage in Vogue"
          imageUrl="./assets/blog-image-2.jpg"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, porro minima repellat quam reiciendis
                vel dignissimos quod recusandae quasi debitis officia voluptate minus quaerat! Nam distinctio ratione
                voluptas. Sapiente nostrum maxime nulla officia delectus fuga quas, laborum ab illo, tempora impedit
                molestiae eius quae odio exercitationem ducimus labore facere veritatis, non ut sed! Soluta, incidunt.
                Similique a optio, architecto dicta magnam, eveniet exercitationem, sint sed aspernatur dolorum atque
                tempore ullam voluptatem alias officia. Fugit explicabo aspernatur illum facere eligendi corrupti earum
                magni distinctio cumque quasi dolor minus, enim quos dolore veritatis maxime, praesentium est reiciendis
                officia. Quo, aliquam? Itaque, rem!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
                repudiandae dolorem corporis minus odit aperiam tenetur. Id earum laborum doloremque incidunt quam,
                labore dolores velit totam commodi eum ex voluptatum!"
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
