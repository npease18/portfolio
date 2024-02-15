export function Header() {
        return (
          <header class="pt-5 w-1/1 flex justify-center">
            <div class="shadow-lg w-[98%] bg-slate-900 flex rounded-lg h-64 max-lg:ml-5 max-lg:mr-5">
              <div class="self-end pb-5">
                <div class="pl-5 self-end text-[50px]">Nicholas Pease</div>
                <div class="pl-5 self-end text-[15px]">My portfolio and project place.</div>
              </div>
            </div>
          </header>
        );
}

export function Footer() {
    return (
      <div class="flex justify-center w-full mb-5">
        <div class="mt-5 bg-slate-900 rounded-lg w-full h-[85px] self-center text-center p-5 ml-5 mr-5">
          &copy; 2024 Nicholas Pease. <br/>Last Updated on 14 FEB 2024.
        </div>
      </div>
    );
  }