import "@/app/globals.css"
import "./navbar.css"
import Image from "next/image"
import { FaSearch } from "react-icons/fa";

function HamburgerMenu() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M1 2H15V4H1V2ZM1 7H15V9H1V7ZM15 12H1V14H15V12Z" fill="white"/>
    </svg>
  )
}

function AddIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15 9V7L9 7V1L7 1L7 7L1 7V9L7 9V15H9L9 9H15Z" fill="white"/>
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7 2C5.68228 2 4.61 3.07228 4.61 4.39C4.61 5.70772 5.68228 6.78 7 6.78C8.31771 6.78 9.39 5.70772 9.39 4.39C9.39 3.07228 8.31772 2 7 2ZM2.61 4.39C2.61 1.96772 4.57771 0 7 0C9.42228 0 11.39 1.96771 11.39 4.39C11.39 5.66447 10.8453 6.81311 9.97624 7.61551C10.1666 7.71116 10.3535 7.81608 10.5368 7.93001C12.5215 9.15787 14 11.3598 14 14V15H0V14C0 11.147 1.63919 8.7213 3.99701 7.59061C3.14356 6.78943 2.61 5.65134 2.61 4.39ZM9.48196 9.62922C8.71501 9.15233 7.88729 8.90797 7.00229 8.91L7 8.91C4.59623 8.91 2.5507 10.634 2.09474 13H11.8975C11.601 11.5742 10.6867 10.3744 9.48398 9.63047L9.48196 9.62922Z" fill="white"/>
    </svg>
  )
}

function SearchBar() {
  return (
    <div className="searchBar flex items-center">
      <FaSearch fill="white" size={18} className="ml-3"/>
      <input type="text" placeholder="Search" />
    </div>
  )
}

export default function pages() {
  return (
    <div className="navbar flex justify-center items-center bg-aws_gray-700 gap-3">
      <HamburgerMenu/>
      <SearchBar/>
      <AddIcon/> 
      <UserIcon/>  
    </div>
  )
}