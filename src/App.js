import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.pinimg.com/564x/cc/45/f4/cc45f4812a8aa83b6aa40c35417aa8ee.jpg" alt="logo" />
        <h1>
          Buffalo Imports
        </h1>
        <nav>
          <ul className="App-nav-links">
            <li>Home</li>|
            <li>Wholesale</li>|
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="App-hero">
          <p>WELCOME TO BUFFALO IMPORTS</p>
          <p className="App-redirect-button" >CLICK HERE TO REDIRECT TO OUR AMAZON PAGE</p>
        </section>
        <section className="App-article">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
            obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
            nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
            tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
            sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
            recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
            minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
            quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
            fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
            consequuntur! Commodi minima excepturi repudiandae velit hic maxime
            doloremque. Quaerat provident commodi consectetur veniam similique ad 
            earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
            fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
            suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
            modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
            totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
            quasi aliquam eligendi, placeat qui corporis!
          </p>
        </section>
        <section className="App-images-container">
          <img className= "App-product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwJSGeOvxq0VutuW01HbrBr7xmzjVG9WpfZsYLzwK6L7SKWyHmj5s4Gl0DPiBHUoQB-4&usqp=CAU" alt="product 1"/>
          <img className= "App-product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAv9eJOHtIyT3FhMqI4VKTrmVHuy5FA2pMg&usqp=CAU" alt="product 2"/>
          <img className= "App-product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uXJ46xQ-kL_HJ9imeTbR6QJlomNOMI-AjTJP3qEcC4tjlCfl9SIu0ex5r7B3fFvP39I&usqp=CAU" alt="product 3"/>
          <img className= "App-product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjaTe-32n0Cj67-V8aG8djwOmmrnVLeDvLwA&usqp=CAU" alt="product 4"/>
          <img className= "App-product-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAv9eJOHtIyT3FhMqI4VKTrmVHuy5FA2pMg&usqp=CAU" alt="product 5"/>
        </section>
        <section className="App-contact-us">
          <h2>Contact Us!</h2>
          <label className="App-input-label">
            Name:
            <input type="text" />
          </label>
          <label className="App-input-label">
            Email:
            <input type="email" />
          </label>
          <label className="App-input-label">
            Type your message:
            <textarea rows='10'/>
          </label>
          <button className="App-send-button">SEND</button>
        </section>
      </main>
    </div>
  );
}

export default App;
