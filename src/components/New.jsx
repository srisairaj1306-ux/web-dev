import Home from './Home';

function Portfolio() {
    return (
        <>
            <header className="navbar">
                <div className="logo">
                    <img src="/images.png" alt="Website Logo" />
                    <h1> Web <span className="dev">Development</span></h1>
                </div>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>
            </header>

            <section className="bg">
                <div className="bg-c">
                    <h1>Web <span className="dev">Development</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, officiis!</p>
                    <button>Go to Learn</button>
                </div>
            </section>

            <section className="support">
                <h1 className="title">Web <span className="dev">Development</span></h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima eaque ipsam rerum distinctio mollitia...</p>
                <div className="cards">
                    <div className="card">
                        <img src="/html.png" alt="HTML logo" />
                        <h3>HTML</h3>
                        <button>Learn</button>
                    </div>
                    <div className="card">
                        <img src="/js.png" alt="JavaScript logo" />
                        <h3>JavaScript</h3>
                        <button>Learn</button>
                    </div>
                    <div className="card">
                        <img src="/css.png" alt="CSS logo" />
                        <h3>CSS</h3>
                        <button>Learn</button>
                    </div>
                    <div className="card">
                        <img src="/rc.png" alt="React logo" />
                        <h3>React</h3>
                        <button>Learn</button>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <h1 className="logo">Web <span className="dev">Development</span></h1>
                <h3><i>Staff: R. Sri Kumara Guru, DME, BE</i></h3>
                <p>He is a web developer.</p>
                <h3>Contact: 9345277987</h3>
                <h3>Email: srisairaj1306@gmail.com</h3>
            </footer>
        </>
    );
}

export default Portfolio;
