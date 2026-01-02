import Home from './Home'
function Portfolio() {
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <img src="./public/images.png" alt="" />
                    <h1> Web<big className='dev'>Developement </big></h1>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </header>
            <section className="bg">
                <div className="bg-c">
                    <h1>Web<big className="dev">Developement </big></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, officiis!</p>
                    <button>GO to Learn</button>
                </div>
            </section>
            <section className="support">
                <h1 className="titel"> web <big className="dev">Developement</big></h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque ipsam rerum distinctio mollitia, at porro voluptas quasi id consequuntur reiciendis dolores officia ex eos earum est aspernatur dolore natus.</p>
                <div className="cards">
                    <table>
                        <th> <div className="card">
                        <img src="./public/html.png" alt="" />
                        <h3>HTML</h3>
                        <button>Learn</button>
                    </div></th>
                    <th><div className="card">
                        <img src="./public/js.png" alt="" />
                        <h3>JAVASCRIPT</h3>
                        <button>Learn</button>
                    </div></th>
                    <th><div className="card">
                        <img src="./public/css.png" alt="" />
                        <h3>CSS</h3>
                        <button>Learn</button>
                    </div></th>
                    
                    <th>
                         <div className="card">
                        <img src="./public/rc.png" alt="" />
                        <h3>REACT</h3>
                        <button>Learn</button>
                    </div>
                    </th>
                    </table>
                    
                </div>
            </section>
            <footer className="footer">
                <h1 className="logo">web <big className="dev">Developement</big></h1>
                <br />
                <h3><i> staff : R.sri kumara guru. DME . BE.,</i></h3>
                <br />
                <p>He is a web developer.</p>
                <br />
                <h3>contact :  9345277987.</h3>
                <br />
                <h3>email : srisairaj1306@gmail.com.</h3>
            </footer>
        </>
    )
}
export default Portfolio