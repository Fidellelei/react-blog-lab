import logo from "../assets/logo";

function About({
  image = logo,
  about,
}) {
  return (
    <aside>
      <img
        src={image}
        alt="blog logo"
      />
      <p>{about}</p>
    </aside>
  );
}

export default About;