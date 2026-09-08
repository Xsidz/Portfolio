import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "react",
    "Next.js",
    "Node.js",
    "javascript",
    "typescript",
    "python",
    "FastAPI",
    "Express",
    "MongoDB",
    "postgresql",
    "redis",
    "Docker",
    "tailwindcss",
    "html5",
    "css3",
    "github",
    "aws",
    "langchain",
    "langgraph",
    "spring",
    "stripe",
    "Socket.io",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40} radius={170}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={120} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
