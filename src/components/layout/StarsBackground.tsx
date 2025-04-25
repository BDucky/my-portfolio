export default function StarsBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-black overflow-hidden">
      <div className="absolute w-full h-full animate-twinkle">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: `${Math.random()}`,
              animation: `twinkle ${
                Math.random() * 5 + 5
              }s infinite ease-in-out`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
