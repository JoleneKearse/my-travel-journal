import github from "/social-github.png"
import linkedin from "/social-linkedin.png"
import twitter from "/social-twitter.png"
import threads from "/social-threads.png"

const Footer = () => {
  return (
    <footer>
      <small>&copy; {new Date().getFullYear()} Jolene Kearse</small>
      <ul className="socials-list">
        <li><a href="https://github.com/JoleneKearse" target="_blank" rel="noopener noreferrer"><img src={github} className="socials" alt="" /></a></li>
        <li><a href="https://www.linkedin.com/in/jolene-kearse-2562ba218/" target="_blank" rel="noopener noreferrer"><img src={linkedin} className="socials" alt="" /></a></li>
        <li><a href="https://twitter.com/FromJolene" target="_blank" rel="noopener noreferrer"><img src={twitter} className="socials" alt="" /></a></li>
        <li><a href="https://www.threads.net/@jolenekearse" target="_blank" rel="noopener noreferrer"><img src={threads} className="socials" alt="" /></a></li>
      </ul>
    </footer>
  )
}

export default Footer