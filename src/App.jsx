import picture from './assets/picture.jpg'
import Profile from './components/Profile'

export default function App() {

  return (
      <div className="app">
        <Profile
          avatar={picture}
          name="Annaely Oliveira"
          bio="Backend Developer Java Python SpringBoot React"
          email ="annaely691@gmail.com"
          phone="+55 (83)999420850"
          githubUrl= "https://github.com/annaelyoliveira"
          linkedinUrl= "https://www.linkedin.com/in/annaelyoliveira"
          instagramUrl= "https://www.instagram.com/annaelyoliveiraj/"
        />
      </div>
  )
}

