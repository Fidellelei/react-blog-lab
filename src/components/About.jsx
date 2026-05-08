function About({ image, about }) {
  const defaultImage =
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"

  return (
    <aside>
      <img
        src={image || defaultImage}
        alt="blog logo"
      />

      <p>{about}</p>
    </aside>
  )
}

export default About