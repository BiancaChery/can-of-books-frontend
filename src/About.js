import { Component } from "react";

class Profile extends Component {
  render() {
    const developers = [
      {
        name: "Gerard Johnson",
        github: "https://github.com/codexwithg",
      },
      {
        name: "Bianca Chery",
        github: "https://github.com/BiancaChery",
      },
      {
        name: "Justine Oyaghiro",
        github: "https://github.com/joyagh",
      },
      
    ];
    return (
      <div>
        <h1>Developers</h1>
        {developers.map((developer, index) => (
          <div key={index}>
            <h2>{developer.name}</h2>
            <a
              href={developer.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Profile
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default Profile;