import { Link } from "@inertiajs/inertia-react"
// import Avatar from "avataaars"


const Navbar = ( {user}) => {
  return (
<div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {!user ?
              <>
              {/* menuju login, menuju register */}
                <li><Link href={route('login')} as="button">Login</Link></li>
                <li><Link href={route('register')} as="button">Register</Link></li>
              </>
              :
              <>
              <li>
                <Link href={route('dashboard')} as="button" className="justify-between">
                  Dashboard
                  <span className="badge">New</span>
                </Link>
              </li>
              <li><Link>Settings</Link></ li>
              <li><Link href={route('logout')} method="post" as="button" >Logout</Link></li>
              </>
         }
      </ul>
    </div>
  </div>
  {/* <div class="navbar-center">
    <a class="btn btn-ghost normal-case text-xl justify-left">Batir Unsoed</a>
  </div> */}
  <div class="navbar-end">
    {/* search */}
{/* 
    <div class="row">
      <div class="col-md-2">
         <form action="/posts">
            <div class="input-group mb-3">
                <input type="text" class="form-control" name="search" placeholder="Cari"/>
                <button class="btn btn-outline-secondary" type="button">Cari</button>
            </div>
         </form>
      </div>
    </div> */}

    <form action="/NewsController/search" class="form-inline" method="get">
    <div class="form-control">
    <div class="input-group mb-3">
      <input type="text" name="search" placeholder="Cari..." class="input input-bordered"/>
      <button class="btn btn-outline-secondary" type="submit">Cari</button>
    </div>
    </div>
    </form>

    {/* <form action="/NewsController/search" method="get">
      <div class="input-group custom-seacrh-form">
        <input type="seacrh" name="serach" class="form-controler"  placeholder="Search Pertanyaan"/>
          <span class="input-group-btn">
            <button type="submit" class="btn btn-primary">search</button>
          </span>
      </div>
    </form> */}

    {/* ikon lonceng */}
    {/* <button class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        <span class="badge badge-xs badge-primary indicator-item"></span>
      </div>
    </button> */}
  </div>
</div>
    )
  }
  
  export default Navbar



// const Navbar = ( {user}) => {
//     return (
//       <div className="navbar bg-base-100 ">
//       <div className="flex-1 ">
//         <a className="btn btn-ghost normal-case text-xl ">TANYA JAWAB AKADEMIK PERKULIAHAN</a>
//       </div>
//       <div className="flex-none gap-2">
//         <div className="form-control">
//           <input type="text" placeholder="Search" className="input input-bordered" />
//         </div>
//         <div className="dropdown dropdown-end">
//           <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
//             <div className="w-10 rounded-full">
//               <img src="https://placeimg.com/80/80/people" />
//             </div>
//           </label>
//           <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
//             {!user ?
//               <>
//               {/* menuju login, menuju register */}
//                 <li><Link href={route('login')} as="button">Login</Link></li>
//                 <li><Link href={route('register')} as="button">Register</Link></li>
//               </>
//               :
//               <>
//               <li>
//                 <Link href={route('dashboard')} as="button" className="justify-between">
//                   Dashboard
//                   <span className="badge">New</span>
//                 </Link>
//               </li>
//               <li><Link>Settings</Link></ li>
//               <li><Link href={route('logout')} method="post" as="button" >Logout</Link></li>
//               </>
//             }
//           </ul>
//         </div>
//       </div>
//     </div>
//     )
// }

// export default Navbar