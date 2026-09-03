export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <h1>Hello Devs</h1>
        <p>Select your favorite programming language</p>
        <ul>
          <li>JavaScript</li>
          <li>C#</li>
          <li>C++</li>
          <li>HTML :D</li>
        </ul>
        <br />
        <p>Select your favorite frameworks and library</p>
        <ol>
          <li>React</li>
          <li>Angular</li>
          <li>NestJS</li>
          <li>NextJS</li>
        </ol>
      </div>
    </main>
  );
}
