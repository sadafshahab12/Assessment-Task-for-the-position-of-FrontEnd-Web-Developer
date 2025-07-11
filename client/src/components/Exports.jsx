import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import HomePage from "../pages/Home";
import GetStarted from "../pages/GetStarted";
import DeveloperLogin from "../pages/developer/DeveloperLogin";
import DeveloperSignup from "../pages/developer/DeveloperSignup";
import UserLogin from "../pages/user/UserLogin";
import UserSignup from "../pages/user/UserSignup";
import LayoutWrapper from "../components/LayoutWrapper";
import DashboardLayout from "../pages/developer/DashboardLayout";
import Profile from "../pages/developer/pages/Profile";
import Projects from "../pages/developer/pages/Projects";
import PrivateRoute from "../components/PrivateRoute";
import CursorTrail from "../components/CursorTrail";
// ------------------------------------------------------------------

import Dashboard from "../pages/developer/pages/Dashboard";
import { useState, useEffect } from "react";
import { HiOutlineMenu, HiOutlineMail } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";

import { IoSearchOutline, IoLockClosed } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi2";
import ToolTip from "../components/ToolTip";
import { CiLinkedin, CiLock } from "react-icons/ci";
import { FaGithub, FaUser, FaNodeJs, FaReact } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { AiOutlineLogout } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoProjectRoadmap, GoStack } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";
import ScrollToTop from "./ScrollToTop";
export {
  BrowserRouter,
  Route,
  Routes,
  HomePage,
  GetStarted,
  DeveloperLogin,
  DeveloperSignup,
  UserLogin,
  UserSignup,
  DashboardLayout,
  LayoutWrapper,
  Profile,
  Projects,
  PrivateRoute,
  CursorTrail,
  Toaster,
  Dashboard,
  useState,
  HiOutlineMenu,
  IoCloseOutline,
  Link,
  useNavigate,
  IoSearchOutline,
  useEffect,
  ToolTip,
  CiLinkedin,
  CiLock,
  FaGithub,
  FaUser,
  FcGoogle,
  GoStack,
  HiOutlineMail,
  IoLockClosed,
  toast,
  AiOutlineLogout,
  CgProfile,
  GoProjectRoadmap,
  LuLayoutDashboard,
  Outlet,
  HiOutlineHome,
  RiTailwindCssLine,
  SiFirebase,
  FaNodeJs,
  FaReact,
  Navbar,
  useLocation,
  ScrollToTop,
};
