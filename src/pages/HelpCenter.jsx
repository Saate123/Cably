import Header from '../component/Header'
import Footer from '../component/Footer'

function HelpCenter() {
  return (
    <div>
      <Header />
      <main>
        <form action="">
          <label htmlFor="help-topic">Help Topic:</label>
          <input type="text" id="help-topic" name="help-topic" />
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default HelpCenter
