export function Header() {
        return (
          <header className="pt-5 w-1/1 flex justify-center">
            <div className="shadow-lg w-[98%] bg-slate-900 flex rounded-lg h-64 max-lg:ml-5 max-lg:mr-5">
              <div className="self-end pb-5">
                <div className="pl-5 self-end text-[50px]">Nicholas Pease</div>
                <div className="pl-5 self-end text-[15px]">My portfolio and project place.</div>
              </div>
            </div>
          </header>
        );
}

export function Footer() {
    return (
      <div className="flex justify-center w-full mb-5">
        <div className="mt-5 bg-slate-900 rounded-lg w-full h-[85px] self-center text-center p-5 ml-5 mr-5">
          &copy; 2024 Nicholas Pease. <br/>Last Updated on 15 FEB 2024.
        </div>
      </div>
    );
}

export function Navigation() {
  return (
    <div className="flex justify-center w-full mb-5">
        <div className="mt-5 bg-slate-900 rounded-lg w-full h-[35px] self-center p-1 ml-5 mr-5">
          <a href="/" className="ml-5 hover:font-bold">Home</a>
          <a href="/projects" className="ml-5 hover:font-bold">Projects</a>
          <a href="/previous_versions" className="ml-5 hover:font-bold">Previous Editions</a>
        </div>
      </div>
  );
}