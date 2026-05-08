function About(props) {
  return (
    <aside>
      <img
        src={props.image}
        alt="blog logo"
        width="200"
      />

      <p>{props.about}</p>
    </aside>
  )
}

export default About