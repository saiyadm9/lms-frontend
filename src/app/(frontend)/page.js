"use client";
import { useEffect } from "react";
import Categories from "@/components/CourseCategory";
import AllCourses from "@/components/AllCourses";
import MeetTheTeam from "@/components/MeetTheTeam";

import AfterHero from "@/components/AfterHero";
import HeroSlides from "@/components/HeroSlides";
import UniversitiesLogo from "@/components/UniversitiesLogo";
import Gallery from "@/components/Gallery";
import { categoriesData } from "../../../data/categories";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userSignInSuccess, userSignOut } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";
import LMSStats from "@/components/LMSStats ";

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state) => state.user);

  const handleLogOut = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/signout`,
        {},
        { withCredentials: true }
      );

      if (response.status === 200) {
        dispatch(userSignOut());
        router.push("/");
      }
    } catch (error) {
      console.error("Logout error:", error.message);
      dispatch(userSignOut());
      router.push("/");
    }
  };

  useEffect(() => {
    // Only verify token if no current user
    if (!currentUser) {
      const verifyToken = async () => {
        try {
          const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/auto-login`,
            { withCredentials: true }
          );
          if (res.status === 200) {
            dispatch(userSignInSuccess(res.data.user));
          } else {
            handleLogOut();
          }
        } catch (error) {
          console.error("Token verification failed", error.message);
          handleLogOut();
        }
      };

      verifyToken();
    }
  }, [currentUser, dispatch, router]);

  return (
    <div>
      <HeroSlides />
      <AfterHero />
      <LMSStats />
      <Categories categories={categoriesData} />
      <AllCourses />
      <MeetTheTeam />
      <Gallery />
      <UniversitiesLogo />
    </div>
  );
};

export default Home;
