const React = require('react')
const Def = require("./default")

function error404 () {
  return (
    <def>
      <main>
        <h1>404: Page Not Found</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <div>
          <img id='not-found' src="/images/bunny.png" alt="bunny pic"/>
          <div>
            Photo by <a href="https://unsplash.com/@stuffinabox">Janan Lagerwall</a> on <a href="https://unsplash.com/s/photos/bunny">Unsplash</a>
          </div>
        </div>
      </main>
    </def>
  )
}

module.exports = error404