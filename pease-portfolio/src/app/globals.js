import moment from 'moment';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

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
          &copy; 2024 Nicholas Pease. <br/>Last Updated on {moment().format("DD MMM YYYY")}.
        </div>
      </div>
    );
}

export function Navigation() {
  return (
    <div className="flex justify-center w-full mb-5 leading-10">
        <div className="mt-5 bg-slate-900 rounded-lg w-full self-center ml-5 mr-5">
          <a href="/" className="pl-5 hover:bg-slate-600 p-2 break-inside-avoid hover:rounded-l-lg">Home</a>
          <a href="/projects" className="hover:bg-slate-600 p-2 break-inside-avoid">Projects</a>
          <CareerNav/>
        </div>
      </div>
  );
}

function CareerNav() {
  return (
    <span>
      <Menu>
        <MenuButton className="pl-2 pr-2 hover:bg-slate-600">Career</MenuButton>
        <MenuItems anchor="bottom start" className="bg-slate-900 text-center mt-3 rounded-lg">
          <MenuItem className="p-2">
            <a className="block data-[focus]:bg-slate-600 hover:rounded-t-lg" href="/settings">
              Resume
            </a>
          </MenuItem>
          <MenuItem className="p-2">
            <a className="block data-[focus]:bg-slate-600" href="/career/work">
              Work Experience
            </a>
          </MenuItem>
          <MenuItem className="p-2">
            <a className="block data-[focus]:bg-slate-600" href="/career/skills">
              Skills
            </a>
          </MenuItem>
          <MenuItem className="p-2">
            <a className="block data-[focus]:bg-slate-600" href="/previous_versions">
              Previous Portfolio Versions
            </a>
          </MenuItem>
          <MenuItem className="p-2">
            <a className="block data-[focus]:bg-slate-600 hover:rounded-b-lg" href="/career/license">
              Licenses & Certifications
            </a>
          </MenuItem>
        </MenuItems>
      </Menu>
    </span>
  )
}